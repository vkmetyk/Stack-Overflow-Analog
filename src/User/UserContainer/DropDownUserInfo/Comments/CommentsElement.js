import React from "react";
import dateGoodView from "../../../../addition-functions/dateGoodView";

function CommentsElement({ info }) {
  return (
    <div className='list-item'>
      <div className='comment'>
        <div className='comment-score'>
          {info?.score}
        </div>
        <div
          className='comment-title'
          dangerouslySetInnerHTML={{__html: info.body || ''}}
        />
        <div className='comment-creation-date'>
          {dateGoodView(info?.creation_date)}
        </div>
      </div>
    </div>
  )
}

export default CommentsElement;