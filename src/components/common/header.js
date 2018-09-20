import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleMenu, toggleCart } from "../../actions/header";

const Header = ({ toggleCart, toggleMenu, isMenuOpen, isOnline }) => {
  return (
    <div className="app-header">
      <div className="logo">
        <a
          href="#"
          onClick={() => {
            toggleMenu(!isMenuOpen);
          }}
        >
          React POS
        </a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" />
      </div>
      <div className="user-menu">
        <a href="#">John Doe</a>
      </div>
      {!isOnline && <div className="network-status">Please check your internet connection!</div>}
    </div>
  );
};

const mapStateToProps = ({ header, appStatus }) => ({
  isMenuOpen: header.isMenuOpen,
  isOnline: appStatus.isOnline
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleMenu, toggleMenu }, dispatch);
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  toggleCart: PropTypes.func
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
