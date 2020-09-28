import React from "react";
import {Link} from "react-router-dom";
import dateGoodView from "../../../addition-functions/dateGoodView";

function AnswerAdditionInfo({ answer }) {
  return (
    <div className='addition-container-info'>
      <div>
        <p>answered: {dateGoodView(answer?.creation_date)}</p>
      </div>
      <div className='user-info'>
        <div className="user-details">
          <Link to={`/user/${answer?.owner?.user_id || ''}`}>
            {answer?.owner?.display_name}
          </Link>
          <div>
            <span className="reputation-score">
              {answer?.owner?.reputation}
            </span>
          </div>
        </div>
        <div className="user-icon-block">
          <div className="avatar-wrapper-32">
            <Link to={`/user/${answer?.owner?.user_id || ''}`}>
              <img
                src={answer?.owner?.profile_image}
                className="user-icon"
                alt='profile'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnswerAdditionInfo;