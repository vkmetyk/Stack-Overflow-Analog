import React from "react";
import dateGoodView from "../../../../../addition-functions/dateGoodView";

function PostsElement({ info, type }) {
  return (
    <div className='list-item'>
      <div className='post'>
        <div className='post-score'>
          {info?.score || '0'}
        </div>
        <div className='type'>
          {type}
        </div>
        <div className='post-title'>
          {info?.title || ''}
        </div>
        <div className='post-creation-date'>
          {dateGoodView(info?.creation_date)}
        </div>
      </div>
    </div>
  )
}

export default PostsElement;