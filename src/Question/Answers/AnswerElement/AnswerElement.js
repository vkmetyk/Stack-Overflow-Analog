import {Link} from "react-router-dom";
import React from "react";
import dateGoodView from "../../../addition-functions/dateGoodView";

function AnswerElement({ answer }) {
  return (
    <div className='answer'>
      <div className='answer-container'>
        <AnswerRate answer={answer} />
        <div className='answer-summary'>
          <div className='answer-text'>
            <p className='answer-body' dangerouslySetInnerHTML={{__html: answer?.body}} />
          </div>
          <div className='addition-answer-info'>
            <div>
              <p>answered: {dateGoodView(answer?.creation_date)}</p>
            </div>
            <div className='user-info'>
              <div className="user-details">
                <Link to={`/user/${answer?.owner?.user_id || ''}`}>
                  {answer?.owner?.display_name}
                </Link>
                <div>
                  <span className="reputation-score">{answer?.owner?.reputation}</span>
                </div>
              </div>
              <div className="user-icon-block">
                <div className="avatar-wrapper-32">
                  <Link to={`/user/${answer?.owner?.user_id || ''}`}>
                    <img
                      src={answer?.owner?.profile_image}
                      style={{width: "32px", height: "32px"}}
                      className="user-icon"
                      alt='profile'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='answer-footer'>
        <Comments answerId={answer?.answer_id} />
      </div>
    </div>
  )
}

export default AnswerElement;