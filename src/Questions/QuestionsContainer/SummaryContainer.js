import React from "react";
import {Link} from "react-router-dom";
import dateGoodView from "../../addition-functions/dateGoodView";

function SummaryContainer({ question }) {
  function getTags(tags) {
    if (!tags || !Array.isArray(tags))
      return null;

    return (
      tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))
    )
  }

  return (
    <div className="summary">
      <h3>
        <Link className="hyperlink" to={`/question/${question?.question_id || ''}`}>
          {question?.title}
        </Link>
      </h3>
      <div className="tags">
        {getTags(question?.tags)}
      </div>
      <div className="started">
        <div className="user-action-time">
          <span className="publish-time">
            {dateGoodView(question.creation_date)}
          </span>
        </div>
        <div className="user-info">
          <div className="user-details">
            <Link to={`/user/${question?.owner?.user_id || ''}`}>
              {question?.owner?.display_name}
            </Link>
            <div>
              <span className="reputation-score">
                Reputation: {question?.owner?.reputation || ''}
              </span>
            </div>
          </div>
          <div className="user-icon-block">
            <div className="avatar-wrapper-32">
              <Link to={`/user/${question?.owner?.user_id || ''}`}>
                <img
                  src={question?.owner?.profile_image || ''}
                  className="user-icon"
                  alt='user profile'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryContainer;