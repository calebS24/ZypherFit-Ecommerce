import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navlogo from '../Assets/logomain.png';
import navprofileIcon from '../Assets/CalebPic.jpg';


const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  useEffect(() => {
    // If there's any side-effect when menu changes, you can handle it here
  }, [menu]);

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => setMenu("shop")} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={navlogo} alt="logo" />
        <p>ZypherFit - Admin Panel</p>
      </Link>
      <img src={navprofileIcon} className='nav-profile' alt="Profile Icon" />
    </div>
  );
}

export default Navbar;
