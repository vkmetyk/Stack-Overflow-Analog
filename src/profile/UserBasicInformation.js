import React from "react";
import dateGoodView from "../dateGoodView";

function UserBasicInformation({ userInfo }) {
  return (
    <div className='user-header'>
      <div className='basic-info'>
        <div className='img-block'>
          <img src={userInfo.profile_image} alt="profile icon"/>
        </div>
        <div className='reputation'>
          <p>{userInfo.reputation}</p>
          <span>-</span>
          <span>reputation</span>
        </div>
        <div>
          <div className='badges'>
            <span className='gold-badge'>{userInfo?.badge_counts?.gold}</span>
            <span className='silver-badge'>{userInfo?.badge_counts?.silver}</span>
            <span className='bronze-badge'>{userInfo?.badge_counts?.bronze}</span>
          </div>
        </div>
      </div>
      <div className='about-me'>
        <p className='user-name'>{userInfo.display_name}</p>
        <p className='user-description' dangerouslySetInnerHTML={{__html: userInfo.about_me}} />
      </div>
      <div className='addition-info'>
        <div className='info-stats'>
          <div>
            <p>{userInfo.answer_count} </p>
            <span>answers</span>
          </div>
          <div>
            <p>{userInfo.question_count} </p>
            <span>questions</span>
          </div>
        </div>
        <div className='add-info-list'>
          <div>
            <p>{userInfo.view_count}</p>
            <span>views</span>
          </div>
          <div>
            {
              userInfo.location ?
                (<p>{userInfo.location}</p>) +
                (<span>location</span>) :
                null
            }
          </div>
          <div>
            <p>{dateGoodView(userInfo.creation_date)}</p>
            <span>creation date</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBasicInformation;