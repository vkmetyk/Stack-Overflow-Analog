import React, {useEffect, useState} from "react";
import apiRequest from "../apiRequest";
import LoadMore from "../LoadMore";

function Tag({ info }) {
  return (
    <div className='list-item'>
      <div className='tag'>
        <div className='tag-name'>
          {info.tag_name}
        </div>
        <div className='tag-score'>
          <span>count </span>{info.answer_score >= info.question_score ? info.answer_score : info.question_score}
        </div>
        <div className='tag-posts-number'>
          <span>posts </span>{info.answer_score >= info.question_score ? info.answer_count : info.question_count}
        </div>
      </div>
    </div>
  )
}

function TopTags({ userId }) {
  const [states, setStates] = useState({
    result: [],
    page: 1
  });

  function loadTags(event) {
    if (states?.result?.length <= 0 && event?.target && !event.target.classList.contains('collapsed')) {
      apiRequest(`users/${userId}/top-tags`, states, setStates,
        {
          'filter': '!4(b7C4WIZXSU_JV71',
        }
      );
    }
  }

  useEffect(() => {
    if (states.page > 1)
      apiRequest(`users/${userId}/top-tags`, states, setStates,
        {
          'filter': '!4(b7C4WIZXSU_JV71',
        }
      );
  }, [states.page]);

  return (
    <div>
      <button
        onClick={loadTags}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target="#user-tags"
      >
        Top tags
      </button>
      <div id="user-tags" className="info-block collapse">
        {
          states?.result?.length > 0 ? states.result.map((post, i) => <Tag key={i} info={post} />) : null
        }
        <LoadMore value={states} setValue={setStates} />
      </div>
    </div>
  )
}

export default TopTags;