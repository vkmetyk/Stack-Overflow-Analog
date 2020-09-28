import React from "react";
import dateGoodView from "../../addition-functions/dateGoodView";
import {Link} from "react-router-dom";

function QuestionSummary({ question }) {
  return (
    <div className='summary'>
      <div className='text'>
        <p className='question-title'>
          {question?.title}
        </p>
        <p className='question-numbers'>
          <span>
            Asked: {dateGoodView(question?.creation_date)}
          </span>
          <span>
            Answers: {question?.answer_count ?? '0'}
          </span>
        </p>
        <p
          className='body'
          dangerouslySetInnerHTML={{__html: question?.body}}
        />
      </div>
      <div className='tags-and-user-info'>
        <div className="tags">
          {question.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className='user-info'>
          <div className="user-details">
            <Link to={`/user/${question?.owner?.user_id || ''}`}>
              {question?.owner?.display_name || ''}
            </Link>
            <div>
              <span className="reputation-score">
                {question?.owner?.reputation || '0'}
              </span>
            </div>
          </div>
          <div className="user-icon-block">
            <div className="avatar-wrapper-32">
              <Link to={`/user/${question?.owner?.user_id || ''}`}>
                <img
                  src={question?.owner?.profile_image || '/images/default-user-icon.svg'}
                  style={{width: "32px", height: "32px"}}
                  className="user-icon"
                  alt='user-icon'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionSummary;