# ZypherFit-Ecommerce-Using-ReactJS

Welcome to ZypherFit, a modern e-commerce platform designed for fitness enthusiasts to browse, shop, and purchase fitness-related products and services effortlessly. This repository contains the source code for the ZypherFit E-Commerce platform.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

---

## Features

- **User-Friendly Interface**: A clean and intuitive UI for seamless navigation.
- **Product Listings**: View detailed fitness product catalogs with categories and filters.
- **Secure Checkout**: Integrated payment gateway for secure transactions.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Admin Panel**: Manage products, orders, and user information.
- **Search and Recommendations**: Find products easily with smart search and personalized recommendations.

---

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Deployed on Vercel

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/calebS24/ZypherFit-Ecommerce.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd ZypherFit-Ecommerce
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and include the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run Backend for fetching APIs, running process and MongoDB:**
   ```bash
   cd backend
   node index.js
   ```

   **Run Customer App:**
   Open a new terminal and enter this,
   ```bash
   cd frontend
   npm start
   ```

   **Run Admin (for adding, removing and checking the products):**
   ```bash
   cd admin
   npm start
   ```

   > **Note:** If `localhost:3000` is already in use, the terminal might prompt:
   ```bash
   "Would you like to run the app on another port instead? » (Y/n)"
   ```      
   >Enter "y" and you are good to go!
   

7. **Access the application:**

   The apps will be open automatically on the ports `3000` and `3001`. If not, `Ctrl + Click` on the link given in the terminal.

---

## Usage

- **For Users:**
  - Browse products and add them to your cart.
  - Create an account or log in for personalized features.
  - Complete orders securely through the checkout process.

- **For Admins:**
  - Use the admin panel to manage inventory, orders, and user data.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes.
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch.
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any queries or suggestions, please feel free to reach out:

- **Name**: Caleb Shaji Varghese  
- **Email**: calebsvarghese@gmail.com  
- **GitHub**: [/calebS24](https://github.com/calebS24)
- **LinkedIn**: [/calebsv](https://www.linkedin.com/in/calebsv)

 
