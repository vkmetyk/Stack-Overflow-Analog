import React from "react";

function BasicInfo({ userInfo }) {
  return (
    <div className='basic-info'>
      <div className='img-block'>
        <img
          src={userInfo?.profile_image || '/images/default-user-icon.svg'}
          alt="profile icon"
        />
      </div>
      <div className='reputation'>
        <p>{userInfo.reputation}</p>
        <span>-</span>
        <span>reputation</span>
      </div>
      <div>
        <div className='badges'>
          <span className='gold-badge'>
            {userInfo?.badge_counts?.gold || '0'}
          </span>
          <span className='silver-badge'>
            {userInfo?.badge_counts?.silver || '0'}
          </span>
          <span className='bronze-badge'>
            {userInfo?.badge_counts?.bronze || '0'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo;