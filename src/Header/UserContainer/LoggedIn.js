import {Link} from "react-router-dom";
import React from "react";

function LoggedIn({ userInfo }) {
  return (
    <Link to="/profile">
      <span className="user-header">
        <img
          className="user-icon"
          src={userInfo?.profile_image || '/images/default-user-icon.svg'}
          alt='user icon'
        />
        <span className="nick-name">{userInfo?.display_name || 'User'}</span>
      </span>
    </Link>
  )
}

export default LoggedIn;