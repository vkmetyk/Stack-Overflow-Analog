import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import './css/header.css';
import apiRequest from "./apiRequest";

function LoggedIn({ userInfo }) {
  return (
    <Link to="/profile">
      <span className="user-header">
        <img className="user-icon" src={userInfo?.profile_image ?? '/images/user-icon.svg'} />
        <span className="nick-name">{userInfo?.display_name ?? 'User'}</span>
      </span>
    </Link>
  )
}

function Incognito() {
  return (
    <span id='user-login' className="user-header">
      <img className="user-icon" src="/images/user-icon.svg" alt="User icon" />
      <span className="nick-name">Login</span>
    </span>
  )
}

function HeaderUserBlock() {
  const [states, setStates] = useState({
    result: [],
  });

  useEffect(() => {
    let token = localStorage.getItem('userToken');

    if (token) {
      apiRequest('me', states, setStates,
        {
          'filter': '!0Z-UstkkN)KrxOtwVYF-rIL2q',
          'client_id': '18651',
          'key': 'xzf5GeIyy1QHmRTuxM3ZjA((',
          'access_token': token,
        }
      );
    }
  }, []);

  return (
    <div className="pl-3 pl-md-4">
      {
        states?.result &&
        states.result?.length ?
          <LoggedIn userInfo={states?.result[0]} /> :
          <Incognito />
      }
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

function SearchContainer() {
  let [states, setStates] = useState({
    value: ''
  });

  function handleInput(e) {
    setStates({
      value: e.target.value
    });
  }

  return (
    <div className="search-container">
      <input
        onChange={handleInput}
        className="search-input"
        value={states.value}
        type="text"
        placeholder="Search.."
      />
      <Link to={`/search/${states.value}`} className="search-button">
        <img src="/images/search.png" alt="search" />
      </Link>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="container py-2">
        <div className="header-menu row">
          <div className="col-12 col-md-3">
            <Link to="/" className="logo navbar-brand row justify-content-center">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="header-right col-12 col-md-8">
            <SearchContainer />
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