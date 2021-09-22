import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Navbar = ({ active }) => {
  return (
    <nav className="nav">
      <ul className="nav_body">
        <li className="nav_body_customer">
          <Link to="/">Customer Profile</Link>
          <div
            className={`nav_body_customer_line  ${
              active ? "appear" : "disappear"
            }`}
          ></div>
        </li>
        <li className="nav_body_order">
          <Link to="/ordersummary">Order Summary</Link>
          <div
            className={`nav_body_order_line ${active ? "disappear" : "appear"}`}
          ></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
