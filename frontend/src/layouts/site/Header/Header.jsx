import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="navbar">
      <div className="logo">
    <Link to={"/"}><h3>LOGO</h3></Link>
      </div>
      <div className="navigations">
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
     
    </header>
  );
};

export default Header;
