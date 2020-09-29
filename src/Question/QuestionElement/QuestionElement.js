import React from "react";
import QuestionAdditionInfo from "./QuestionAdditionInfo";
import QuestionText from "./QuestionText";
import RateUpDown from "../RateUpDown";

function QuestionElement({ question }) {
  return (
    <div className='question-element element'>
      <RateUpDown
        up={true}
        down={true}
        score={question.score}
        target={`questions/${question?.question_id}`}
      />
      <div className='summary'>
        <QuestionText question={question} />
        <QuestionAdditionInfo question={question} />
      </div>
    </div>
  )
}

export default QuestionElement;