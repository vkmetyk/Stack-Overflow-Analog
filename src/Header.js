import React from "react";
import {Link} from 'react-router-dom';
import './css/header.css';

function HeaderUserBlock() {
  return (
    <div className="pl-3 pl-md-4">
      <Link to="/profile">
        <span className="user-header">
          <img className="user-icon" src="/images/user-icon.svg" alt="User icon" />
          <span className="nick-name">User</span>
        </span>
      </Link>
    </div>
  );
}

function NavigationMenu() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light col-12">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/">
            <span className="nav-link">Main<span className="sr-only">(current)</span></span>
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

function Header() {
  return (
    <header className="header">
      <div className="container py-2">
        <div className="header-menu row">
          <div className="col-12 col-md-3">
            <a href="/" className="logo navbar-brand row justify-content-center">
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="header-right col-12 col-md-8">
            <div className="search-container">
              <input className="search-input" type="text" placeholder="Search.." />
                <button className="search-button" type="submit">
                  <img src="/images/search.png" alt="search" />
                </button>
            </div>
            <HeaderUserBlock />
          </div>
        </div>
        <div className="header-menu row">
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;