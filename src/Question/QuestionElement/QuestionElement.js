import React from "react";
import QuestionAdditionInfo from "./QuestionAdditionInfo";
import QuestionText from "./QuestionText";

function QuestionElement({ question }) {
  return (
    <div className='question-element element'>
      {/*<QuestionRate question={question} />*/}
      <div className='summary'>
        <QuestionText question={question} />
        <QuestionAdditionInfo question={question} />
      </div>
    </div>
  )
}

export default QuestionElement;