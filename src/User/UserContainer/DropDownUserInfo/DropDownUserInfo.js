import React from "react";
import Comments from "./Comments";
import Privileges from "./Privileges";
import TopTags from "./TopTags";
import Posts from "./Posts";

function DropDownUserInfo({ userInfo }) {
  if (!userInfo || !userInfo?.user_id)
    return null;

  return (
    <div className='user-drop-info-sector'>
      <Posts userId={userInfo.user_id} />
      <Comments userId={userInfo.user_id} />
      <TopTags userId={userInfo.user_id} />
      <Privileges userId={userInfo.user_id} />
    </div>
  )
}

export default DropDownUserInfo;