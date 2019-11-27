import React, { Component } from "react";
import Logo from "./img/logo.png";
import { FaCaretDown, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="navigation">
        <Link to="/">
          <div className="nav-logo">
            <img src={Logo} alt="jancokk" />
          </div>
        </Link>

        <div className="nav-menu">
          <ul className="nav-left">
            <li className="menu">
              <Link
                to={"/about"}
                className="menu"
                style={{ textDecoration: "none", color: "white" }}
              >
                Product &nbsp; <FaCaretDown />
              </Link>
            </li>
            <li className="menu">
              <Link
                to={"/solution"}
                className="menu"
                style={{ textDecoration: "none", color: "white" }}
              >
                Solution &nbsp; <FaCaretDown />
              </Link>
            </li>
            <li className="menu">
              <Link
                to={"/developer"}
                className="menu"
                style={{ textDecoration: "none", color: "white" }}
              >
                Developer &nbsp; <FaCaretDown />
              </Link>
            </li>
            <li className="menu">
              Product &nbsp; <FaCaretDown />
            </li>
            <li className="menu">
              Resources &nbsp; <FaCaretDown />
            </li>
            <li className="menu">
              Pricing &nbsp; <FaCaretDown />
            </li>
          </ul>
        </div>
        <div className="bars-mobile">
          <i className="fas fa-bars" />
        </div>
        <div className="nav-sign">
          <ul className="nav-right">
            <li className="menu">Sign In</li>
            <li className=" menu1 get-started">
              Get Started &nbsp;
              <FaPlay />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
