import React from "react";
import './user-page.scss'
import GeneralUserInfo from "./GeneralUserInfo";
import DropDownUserInfo from "./DropDownUserInfo";
import Loading from "../../Shared/Loading";

function UserContainer({ userInfo }) {
  if (!userInfo || !userInfo?.user_id)
    return <Loading showButton={true} />;

  return (
    <>
      <div className='user-container'>
        <GeneralUserInfo userInfo={userInfo} />
        <DropDownUserInfo userInfo={userInfo} />
      </div>
    </>
  )
}

export default UserContainer;