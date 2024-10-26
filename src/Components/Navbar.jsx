import React from 'react';
 import logo from "../img/logo.jpg"
import "./Navbar.css";
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className="navbar"><img src={logo} alt="logo" />
    <ul className="nav-menu">
    <Link to="/Signup">
      <li>Sign Up</li>
    </Link>
    <Link to="/Signin">
      <li>Sign In</li>
    </Link>
    <Link to="/Profile">
      <li>Profile</li>
    </Link>
    <Link to="/Createpost"><li>Createpost</li></Link>
      </ul></div>
  )
}
