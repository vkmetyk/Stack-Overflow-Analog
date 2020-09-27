import React from "react";
import {Link} from "react-router-dom";

function ProfileHeader() {
  function LogoutAction(e) {
    localStorage.removeItem('userToken');
    window.location.href = '/';
  }

  return (
    <div className='profile-header-container'>
      <Link to="/questions/favorite" className='button'>Favorite tags questions</Link>
      <button onClick={LogoutAction} className='button'>Logout</button>
    </div>
  )
}

export default ProfileHeader;