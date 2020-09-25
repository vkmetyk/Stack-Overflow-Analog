import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";

function LoggedIn({ userInfo }) {
  return (
    <Link to="/profile">
      <span className="user-header">
        <img
          className="user-icon"
          src={userInfo?.profile_image ?? '/images/user-icon.svg'}
          alt='user icon'
        />
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

function UserContainer() {
  const [states, setStates] = useState({
    result: [],
  });

  // useEffect(() => {
  //   let token = localStorage.getItem('userToken');
  //
  //   if (token) {
  //     apiRequest('me', states, setStates,
  //       {
  //         'filter': '!0Z-UstkkN)KrxOtwVYF-rIL2q',
  //         'client_id': '18651',
  //         'key': 'xzf5GeIyy1QHmRTuxM3ZjA((',
  //         'access_token': token,
  //       }
  //     );
  //   }
  // }, []);

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

export default UserContainer;