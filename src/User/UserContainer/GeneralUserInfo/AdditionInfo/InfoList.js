import React from "react";
import dateGoodView from "../../../../addition-functions/dateGoodView";

function InfoList({ userInfo }) {
  return (
    <div className='add-info-list'>
      <div>
        <p>{userInfo?.view_count || '0'}</p>
        <span>views</span>
      </div>
      <div>
        {userInfo?.location &&
          <>
            <p>{userInfo.location}</p>
            <span>location</span>
          </>
        }
      </div>
      <div>
        <p>{dateGoodView(userInfo?.creation_date)}</p>
        <span>creation date</span>
      </div>
    </div>
  )
}

export default InfoList;