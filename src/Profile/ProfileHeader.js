import React from "react";

function ProfileHeader() {
  function LogoutAction(e) {
    localStorage.removeItem('userToken');
    window.location.href = '/';
  }

  return (
    <div className='profile-header-container'>
      <button onClick={LogoutAction} className='button'>Logout</button>
    </div>
  )
}

export default ProfileHeader;