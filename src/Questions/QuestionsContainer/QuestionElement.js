import React from "react";
import PropTypes from 'prop-types'
import StatsContainer from "./StatsContainer";
import SummaryContainer from "./SummaryContainer";

function QuestionElement({ question }) {
  if (!question)
    return null;

  return (
    <div className="question-element">
      <StatsContainer question={question} />
      <SummaryContainer question={question} />
    </div>
  )
}

QuestionElement.propTypes = {
  question: PropTypes.object
}

export default QuestionElement;