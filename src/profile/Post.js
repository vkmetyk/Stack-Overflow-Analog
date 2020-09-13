import React from "react";
import dateGoodView from "../dateGoodView";

function Post({ info, type }) {
  return (
    <div className='list-item'>
      <div className='post'>
        <div className='post-score'>
          {info.score}
        </div>
        <div className='type'>
          {type}
        </div>
        <div className='post-title'>
          {info.title}
        </div>
        <div className='post-creation-date'>
          {dateGoodView(info.creation_date)}
        </div>
      </div>
    </div>
  )
}

export default Post;