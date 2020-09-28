import React from "react";
import dateGoodView from "../../addition-functions/dateGoodView";

function QuestionText({ question }) {
  return (
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
  )
}

export default QuestionText;