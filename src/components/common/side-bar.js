import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "./footer";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <div className={isMenuOpen ? "app-sidebar menu-open" : "app-sidebar"}>
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

const mapStateToProps = ({ header }) => ({
  isMenuOpen: header.isMenuOpen
});

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Sidebar)
);
