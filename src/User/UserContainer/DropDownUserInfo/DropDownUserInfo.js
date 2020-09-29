import React from "react";
import Posts from "./DropDownElements/Posts";
import DropDownItem from "./DropDownItem";
import Comments from "./DropDownElements/Comments";
import Privileges from "./DropDownElements/Privileges";
import TopTags from "./DropDownElements/TopTags";

function DropDownUserInfo({ userInfo }) {
  if (!userInfo || !userInfo?.user_id)
    return null;

  return (
    <div className='user-drop-info-sector'>
      <Posts userId={userInfo.user_id} />
      <DropDownItem
        itemName='Comments'
        filter='!1zSk2TL5Pj8578G.o71ZB'
        whatAsk={`users/${userInfo.user_id}/comments`}
      >
        <Comments />
      </DropDownItem>
      <DropDownItem
        itemName='Privileges'
        filter='!*ME*IwgDRSRwONb5'
        whatAsk={`users/${userInfo.user_id}/privileges`}
      >
        <Privileges />
      </DropDownItem>
      <DropDownItem
        itemName='TopTags'
        filter='!6RjeIanW7CSlD'
        whatAsk={`users/${userInfo.user_id}/top-tags`}
      >
        <TopTags />
      </DropDownItem>
    </div>
  )
}

export default DropDownUserInfo;