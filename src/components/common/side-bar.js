import React from "react";
import {NavLink, Link} from 'react-router-dom';
import Footer from "./footer";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Sidebar;
