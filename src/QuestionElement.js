import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

function QuestionElement({ question }) {
  return (
    <div className="question-element">
      <div className="stats-container">
        <div className="stats">
          <div className="vote">
            <div className="votes">
              <span className="vote-count-post "><strong>{question.score}</strong></span>
              <div className="view-count">votes</div>
            </div>
          </div>
          <div className={`status ${question.is_answered ? 'answered' : ''}`}>
            <strong>{question.answer_count}</strong>
            answers
          </div>
        </div>
        <div className="views">
          {question.view_count} views
        </div>
      </div>

      <div className="summary">
        <h3>
          <Link className="hyperlink" to={`/questions/${question.question_id}`}>
            {question.title}
          </Link>
        </h3>
        <div className="tags">
          {question.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="started">
          <div className="user-action-time">
            publish time: <span className="publish-time">{
            (new Date(question.creation_date * 1000)).toLocaleDateString()
          }</span>
          </div>
          <div className="user-info">
            <div className="user-details">
              <Link to={`/users/${question.owner.user_id}`}>
                {question.owner.display_name}
              </Link>
              <div>
                <span className="reputation-score">Reputation: {question.owner.reputation}</span>
              </div>
            </div>
            <div className="user-icon-block">
              <div className="avatar-wrapper-32">
                <Link to={`/users/${question.owner.user_id}`}>
                  <img src={question.owner.profile_image} width="32" height="32" className="user-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

QuestionElement.propTypes = {
  question: PropTypes.object
}

export default QuestionElement;