import React, {useState, useEffect} from 'react';
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";

function QuestionContainer({ question }) {
  console.log(question);
  return (
    <h3>Question</h3>
  );
}

function Question({ match }) {
  let questionId = match.params.id;

  const [states, setStates] = useState({
    result: [], sortType: 'activity', orderType: 'desc'
  });

  useEffect(() => {
    apiRequest(`questions/${questionId}`, states, setStates);
  }, [states.orderType, states.sortType]);

  const changeSortType = (type) => setStates(states => ({
    ...states,
    sortType: type
  }));
  const changeOrderType = (type) => setStates(states => ({
    ...states,
    orderType: type
  }));

  return (
    <div className="questions-container">
      <SortContainer
        changeSortType={changeSortType}
        changeOrderType={changeOrderType}
        sortBy={["activity", "votes", "creation"]}
        orderBy={["desc", "asce"]}
      />
      {states?.result?.map(question => (
        <QuestionContainer key={question.question_id} question={question} />
      ))}
    </div>
  )
}

export default Question;