import {Link} from "react-router-dom";
import React from "react";

function NavigationMenu() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light col-12">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/questions">
            <span className="nav-link">Questions<span className="sr-only">(current)</span></span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/users">
            <span className="nav-link">Users</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tags">
            <span className="nav-link">Tags</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;