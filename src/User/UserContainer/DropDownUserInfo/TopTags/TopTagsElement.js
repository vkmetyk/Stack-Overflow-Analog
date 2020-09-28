import React from "react";

function TopTagsElement({ info }) {
  const score = info.answer_score >= info.question_score ? info.answer_score : info.question_score;
  const count = info.answer_score >= info.question_score ? info.answer_count : info.question_count;

  return (
    <div className='list-item'>
      <div className='tag'>
        <div className='tag-name'>
          {info?.tag_name || ''}
        </div>
        <div className='tag-score'>
          <span>count </span>
          {score || '0'}
        </div>
        <div className='tag-posts-number'>
          <span>posts </span>
          {count || '0'}
        </div>
      </div>
    </div>
  )
}

export default TopTagsElement;