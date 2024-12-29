const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// #region Database + MongoDB Connection
mongoose
  .connect("mongodb+srv://CalebS:1234@cluster0.e0v55.mongodb.net/E-Commerce-React", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// #region Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });

// #region Models
const Users = mongoose.model("Users", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number },
  old_price: { type: Number },
  date: { type: Date, default: Date.now },
});

// #region Middleware to fetch user from token
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ errors: "Please authenticate with a valid token" });

  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ errors: "Invalid or expired token" });
  }
};

// #region Upload Image
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) return res.status(400).json({ success: 0, error: "No file uploaded" });

  res.json({ success: 1, image_url: `/images/${req.file.filename}` });
});

app.use("/images", express.static("upload/images"));

// #region ROOT API Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Signup Endpoint
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) return res.status(400).json({ success: false, errors: "User already exists" });

    const cart = {};
    for (let i = 0; i < 300; i++) cart[i] = 0;

    const user = new Users({
      name: username,
      email,
      password,
      cartData: cart,
    });

    await user.save();
    const token = jwt.sign({ user: { id: user.id } }, "secret_ecom", { expiresIn: "3h" });
    res.json({ success: true, token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// #region Login Endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user && password === user.password) {
      const token = jwt.sign({ user: { id: user.id } }, "secret_ecom", { expiresIn: "3h" });

      user.lastLogin = new Date();
      await user.save();

      res.json({ success: true, token, message: "Login successful" });
    } else {
      res.status(400).json({ success: false, errors: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// #region Fetch All Products
app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to fetch products");
  }
});

// #region Add Product (Admin)
app.post("/addproduct", async (req, res) => {
  try {
    const { name, description, image, category, new_price, old_price } = req.body;

    const products = await Product.find({});
    const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
      id,
      name,
      description,
      image,
      category,
      new_price,
      old_price,
    });

    await product.save();
    res.json({ success: true, name });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to add product");
  }
});

// #region Delete Product (Admin)
app.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOneAndDelete({ id });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: `Product with ID ${id} deleted successfully` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to delete product");
  }
});

// #region Starting Express Server
app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
