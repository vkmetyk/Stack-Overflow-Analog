import React, {useState, useEffect} from "react";
import './Questions.scss'
import SelectButtonsList from "../Shared/SelectButtonsList";
import SelectButton from "../Shared/SelectButton";
import LoadMore from "../Shared/LoadMore";
import Search from "../Shared/Search";
import QuestionsContainer from "./QuestionsContainer";

function Questions() {
  const [states, setStates] = useState({
    result: [],
    whatAsk: 0,
    orderType: 'desc',
    sortType: 'activity',
    page: 1,
    hasMore: false,
  });

  const sortParameters = {
    'activity': 'activity',
    'votes': 'votes',
    'creation': 'creation',
  }

  const orderParameters = {
    'ascending': 'asc',
    'descending': 'desc',
  }

  function changeFieldAfterSort (fieldName, value, setState) {
    setState(states => ({
      ...states,
      page: 1,
      result: [],
      [fieldName]: value
    }));
  }

  function changeSortType(value) {
    changeFieldAfterSort("sortType", value, setStates);
  }

  function changeOrderType(value) {
    changeFieldAfterSort("orderType", value, setStates);
  }

  return (
    <>
      <Search />
      <SelectButtonsList>
        <SelectButton options={sortParameters} changeFunction={changeSortType} />
        <SelectButton options={orderParameters} changeFunction={changeOrderType} />
      </SelectButtonsList>
      <QuestionsContainer questions={states.result} />
      <LoadMore propName='page' setStates={setStates} show={states.hasMore} />
    </>
  )
}

export default Questions;