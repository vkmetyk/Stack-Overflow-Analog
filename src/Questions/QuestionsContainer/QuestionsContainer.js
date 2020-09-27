import React from "react";
import PropTypes from 'prop-types';
import QuestionElement from "./QuestionElement";
import Loading from "../../Shared/Loading";

function QuestionsContainer({ questions }) {
  if (!questions || !Array.isArray(questions) || questions.length < 1)
    return <Loading />;

  return (
    <div className="questions-container">
      {
        questions.map((question, index) =>
          <QuestionElement key={index} question={question} />
        )
      }
    </div>
  )
}

QuestionsContainer.propTypes = {
  questions: PropTypes.array
}

export default QuestionsContainer;