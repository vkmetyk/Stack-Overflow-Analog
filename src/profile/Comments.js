import React, {useEffect, useState} from "react";
import apiRequest from "../apiRequest";
import LoadMore from "../LoadMore";
import dateGoodView from "../dateGoodView";

function Comment({ info }) {
  return (
    <div className='list-item'>
      <div className='comment'>
        <div className='comment-score'>
          {info.score}
        </div>
        <div className='comment-title' dangerouslySetInnerHTML={{__html: info.body}} />
        <div className='comment-creation-date'>
          {dateGoodView(info.creation_date)}
        </div>
      </div>
    </div>
  )
}

function Comments({ userId }) {
  const [states, setStates] = useState({
    result: [],
    page: 1
  });

  function loadComments(event) {
    if (states?.result?.length <= 0 && event?.target && !event.target.classList.contains('collapsed')) {
      apiRequest(`users/${userId}/comments`, states, setStates,
        {
          'filter': '!)Q29mm4ee)TTK9SncbsR1tZR',
        }
      );
    }
  }

  useEffect(() => {
    if (states.page > 1)
      apiRequest(`users/${userId}/comments`, states, setStates,
        {
          'filter': '!)Q29mm4ee)TTK9SncbsR1tZR',
        }
      );
  }, [states.page]);

  return (
    <div>
      <button
        onClick={loadComments}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target="#user-comments"
      >
        Comments
      </button>
      <div id="user-comments" className="info-block collapse">
        {
          states?.result?.length > 0 ? states.result.map((post, i) => <Comment key={i} info={post} />) : null
        }
        <LoadMore value={states} setValue={setStates} />
      </div>
    </div>
  )

}

export default Comments;