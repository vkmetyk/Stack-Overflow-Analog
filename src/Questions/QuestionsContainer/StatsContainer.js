import React from 'react';

function StatsContainer({ question }) {
  return (
    <div className="stats-container">
      <div className="stats">
        <div className="vote">
          <div className="votes">
            <span className="vote-count-post ">
              <strong>
                {question?.score || '0'}
              </strong>
            </span>
            <div className="view-count">votes</div>
          </div>
        </div>
        <div className={`status ${question?.is_answered ? 'answered' : ''}`}>
          <strong>
            {question?.answer_count || '0'}
          </strong>
          answers
        </div>
      </div>
      <div className="views">
        {question?.view_count || '0'} views
      </div>
    </div>
  )
}

export default StatsContainer;