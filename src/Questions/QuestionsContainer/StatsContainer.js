import React from 'react';

function StatsContainer({ question }) {
  return (
    <div className="stats-container">
      <div className="stats">
        <div className="vote">
          <div className="votes">
            <span className="vote-count-post ">
              <strong>
                {question?.score || ''}
              </strong>
            </span>
            <div className="view-count">votes</div>
          </div>
        </div>
        <div className={`status ${question?.is_answered ? 'answered' : ''}`}>
          <strong>
            {question?.answer_count || ''}
          </strong>
          answers
        </div>
      </div>
      <div className="views">
        {question?.view_count || ''} views
      </div>
    </div>
  )
}

export default StatsContainer;