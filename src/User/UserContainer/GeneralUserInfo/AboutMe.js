import React from "react";

function AboutMe({ userInfo }) {
  return (
    <div className='about-me'>
      <p className='user-name'>
        {userInfo?.display_name || ''}
      </p>
      <p
        className='user-description'
        dangerouslySetInnerHTML={{__html: userInfo?.about_me || ''}}
      />
    </div>
  )
}

export default AboutMe;