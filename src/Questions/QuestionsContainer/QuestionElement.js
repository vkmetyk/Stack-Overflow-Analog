import React from "react";
import StatsContainer from "./StatsContainer";
import SummaryContainer from "./SummaryContainer";

function QuestionElement({ question }) {
  if (!question || typeof question !== 'object')
    return null;

  return (
    <div className="question-element">
      <StatsContainer question={question} />
      <SummaryContainer question={question} />
    </div>
  )
}

export default QuestionElement;