import React from "react";
import QuestionRate from "./QuestionRate";
import QuestionSummary from "./QuestionSummary";

function QuestionElement({ question }) {
  return (
    <div className='question-element element'>
      <QuestionRate question={question} />
      <QuestionSummary question={question} />
    </div>
  )
}

export default QuestionElement;