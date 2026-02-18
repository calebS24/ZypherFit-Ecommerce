// #region Importing components
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/testimonials/Testimonials";
import Brands from "./Components/Brands/Brands";

export const backend_url = "http://localhost:4000"; //backend server URL
export const currency = "₹"; // Currency symbol for the application.

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Shop gender="all" />
                <Testimonials />
                <Brands />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
