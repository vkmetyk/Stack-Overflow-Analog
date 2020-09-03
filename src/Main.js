import React, {useState, useEffect} from 'react';
import QuestionElement from "./QuestionElement";
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";
import './css/main.css'
import './css/questions.css'

function Main() {
  const [states, setStates] = useState({
    result: [], sortType: 'activity', orderType: 'desc'
  });

  useEffect(() => {
    apiRequest('questions', states, setStates);
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
        <QuestionElement key={question.question_id} question={question} />
      ))}
    </div>
  )
}

export default Main;