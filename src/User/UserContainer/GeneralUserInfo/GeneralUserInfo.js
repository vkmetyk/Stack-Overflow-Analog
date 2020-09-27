import React from "react";
import BasicInfo from "./BasicInfo";
import AboutMe from "./AboutMe";
import AdditionInfo from "./AdditionInfo";

function GeneralUserInfo({ userInfo }) {
  return (
    <div className='user-header'>
      <BasicInfo userInfo={userInfo} />
      <AboutMe userInfo={userInfo} />
      <AdditionInfo userInfo={userInfo} />
    </div>
  )
}

export default GeneralUserInfo;