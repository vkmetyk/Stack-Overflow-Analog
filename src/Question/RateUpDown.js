import React, {useState} from "react";
import info from "../constants";
import Axios from "axios";
import saveApiResult from "../addition-functions/saveApiResult";
import apiPostRequest from "../addition-functions/apiPostRequest";

function RateUpDown({ up, down, target, score }) {
  const [states] = useState({
    key: info.key,
    access_token: info.access_token,
  });

  const [result, setResult] = useState({
    data: [],
    upButton: false,
    downButton: false,
  });

  function upVote(e) {
    let source = Axios.CancelToken.source();
    let url = `${target}/upvote${states.upButton ? '/undo' : ''}`;

    apiPostRequest(url, states, source)
      .then(data => data && saveApiResult(data, setResult))
      .then((saveResult) => saveResult &&
        setResult(prev => ({
          ...prev,
          upButton: !prev.upButton
        })))

    return source.cancel;
  }

  function downVote(e) {
    let source = Axios.CancelToken.source();
    let url = `${target}/downvote${states.upButton ? '/undo' : ''}`;

    apiPostRequest(url, states, source)
      .then(data => data && saveApiResult(data, setResult))
      .then((saveResult) => saveResult &&
        setResult(prev => ({
          ...prev,
          downButton: !prev.downButton
        })))

    return source.cancel;
  }

  return (
    <div className='rate-container'>
      <div>
        {up &&
          <button
            onClick={upVote}
            className={`action-button ${result.upButton ? 'rated' : ''}`}
          >
            <img className='top-img' src="/images/down-arrow.png" alt="like"/>
          </button>
        }
        <p>{score || '0'}</p>
        {down &&
          <button
            onClick={downVote}
            className={`action-button ${result.downButton ? 'rated' : ''}`}
          >
            <img src="/images/down-arrow.png" alt="dislike"/>
          </button>
        }
      </div>
    </div>
  )
}

export default RateUpDown;