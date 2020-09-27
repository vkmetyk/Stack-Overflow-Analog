import React from "react";
import {Link} from "react-router-dom";

function UserElement({ user }) {
  if (!user || typeof user !== 'object')
    return null;

  return (
    <div className="user-element">
      <h3>
        <Link className="hyperlink" to={`/user/${user?.user_id || ''}`}>
          {user?.display_name || ''}
        </Link>
      </h3>
      <div className="image-block">
        <Link to={`/user/${user?.user_id || ''}`}>
          <img
            src={user?.profile_image || '/images/default-user-icon.svg'}
            alt="User's logo"
          />
        </Link>
      </div>
      <p className='user-reputation'>
        {user?.reputation || '0'}
      </p>
      <div className='badges'>
        <span className='gold-badge'>{user?.badge_counts?.gold || '0'}</span>
        <span className='silver-badge'>{user?.badge_counts?.silver || '0'}</span>
        <span className='bronze-badge'>{user?.badge_counts?.bronze || '0'}</span>
      </div>
      <p>
        {user?.location || ''}
      </p>
    </div>
  )
}

export default UserElement;