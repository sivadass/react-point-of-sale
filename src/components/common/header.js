import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo">
        <Link to="/">React POS</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" />
      </div> 
      <div className="user-menu">
        <a href="#">John Doe</a>
      </div>   
    </div>
  );
};

export default Header;
