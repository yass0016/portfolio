import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";

import { set_active_menu_item } from "../../redux/actions/common";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              Portfolio
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li
                className={
                  this.props.location.pathname === "/" ? "active" : undefined
                }
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  this.props.location.pathname === "/about"
                    ? "active"
                    : undefined
                }
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  this.props.location.pathname === "/contact"
                    ? "active"
                    : undefined
                }
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      set_active_menu_item
    }
  )(Header)
);
