import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/Banner-women.png";
import men_banner from "./Components/Assets/Banner-mens.png";
import kid_banner from "./Components/Assets/Banner-kids.png";
import LoginSignup from "./Pages/LoginSignup";
import Testimonials from "./Components/testimonials/Testimonials";
import Brands from "./Components/Brands/Brands";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export const backend_url = "http://localhost:4000";
export const currency = "₹";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Shop gender="all" />
              <Testimonials />
              <Brands />
            </>
          } />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product">
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
