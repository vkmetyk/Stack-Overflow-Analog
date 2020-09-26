import React, {useState, useEffect} from "react";
import './Questions.scss'
import SelectButtonsList from "../Shared/SelectButtonsList";
import SelectButton from "../Shared/SelectButton";
import LoadMore from "../Shared/LoadMore";
import Search from "../Shared/Search";
import QuestionsContainer from "./QuestionsContainer";
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";

function Questions({ match }) {
  const [states, setStates] = useState({
    result: [],
    orderType: 'desc',
    sortType: 'activity',
    page: 1,
    pageSize: 12,
    search: '',
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

  const pageSizeParameters = {
    '12': '12',
    '18': '18',
    '24': '24',
    '30': '30',
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

  function changePageSize(value) {
    changeFieldAfterSort("pageSize", value, setStates);
  }

  function search(value) {
    setStates(() => ({
      search: value,
      result: [],
      page: 1
    }));
  }

  useEffect(() => {
    apiGetRequest('questions', {
      'page': states.page,
      'pagesize': states.pageSize,
      'order': states.orderType,
      'sort': states.sortType,
      'filter': '!.IzyzT1sqxXAwfdQazjwQpaNc)Wo1',
      ...(states?.search?.length > 0 ? {'intitle': states.search} : null),
      ...(match?.params?.tag ? {'tagged': match.params.tag} : null),
    }).then(data => data && saveApiResult(data, setStates))
  }, [states.page, states.sortType, states.orderType, states.pageSize, states.search, match]);

  return (
    <>
      <Search searchFunction={search} />
      <SelectButtonsList>
        <SelectButton options={sortParameters} changeFunction={changeSortType} />
        <SelectButton options={pageSizeParameters} changeFunction={changePageSize} />
        <SelectButton options={orderParameters} changeFunction={changeOrderType} />
      </SelectButtonsList>
      <QuestionsContainer questions={states.result} />
      <LoadMore propName='page' setStates={setStates} show={states.hasMore} />
    </>
  )
}

export default Questions;