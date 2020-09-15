import React, {useEffect, useState} from 'react';
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";
import {Link} from "react-router-dom";
import './css/users.css'
import LoadMore from "./LoadMore";

function UserElement({ user }) {
  return (
    <div className="user-element">
      <h3>
        <Link className="hyperlink" to={`/users/${user.user_id}`}>
          {user.display_name}
        </Link>
      </h3>
      <div className="image-block">
        <Link to={`/users/${user.user_id}`}>
          <img src={user.profile_image} alt="User's logo" />
        </Link>
      </div>
      <p className='user-reputation'>{user.reputation}</p>
      <div className='badges'>
        <span className='gold-badge'>{user?.badge_counts?.gold}</span>
        <span className='silver-badge'>{user?.badge_counts?.silver}</span>
        <span className='bronze-badge'>{user?.badge_counts?.bronze}</span>
      </div>
      <p>{user.location}</p>
    </div>
  );
}

function Users({ match }) {
  const [states, setStates] = useState({
    result: [],
    sortType: 'reputation',
    orderType: 'desc',
    page: 1,
  });

  useEffect(() => {
    apiRequest('users', states, setStates,
      {
        'filter': '!0Z-Lvgpjwf2NaFZwwPDvRaNAq',
      }
    );
  }, [states.orderType, states.sortType, states.page]);

  return (
    <>
      <SortContainer
        setState={setStates}
        sortBy={["reputation", "creation", "name"]}
        orderBy={["desc", "asc"]}
      />
      <div className="users-container px-4">
        {states?.result?.map(user => user ? (<UserElement key={user.user_id} user={user} />) : null
        )}
      </div>
      <LoadMore value={states} setValue={setStates} />
    </>
  )
}

export default Users;