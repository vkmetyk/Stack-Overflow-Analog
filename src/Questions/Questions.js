import React, {useState, useEffect} from "react";
import './Questions.scss'
import SelectButtonsList from "../Shared/SelectButtonsList";
import SelectButton from "../Shared/SelectButton";
import LoadMore from "../Shared/LoadMore";
import Search from "../Shared/Search";
import QuestionsContainer from "./QuestionsContainer";
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";
import Axios from "axios";
import info from "../constants";
import changeSelectedData from "../addition-functions/changeSelectedData";

function createQuestionsRequest(request, states) {
  let whatAsk = states?.intitle?.length > 0 ? 'search' : request;
  let params = {};

  for (let [key, value] of Object.entries(states)) {
    if (value)
      params[key] = value;
  }
  return [whatAsk, params];
}

function Questions({ match }) {
  const [states, setStates] = useState({
    intitle: '',
    page: 1,
    pagesize: info.pageSize,
    order: 'desc',
    sort: 'activity',
    tagged: match?.params?.tag ? decodeURIComponent(match?.params?.tag) : null,
    filter: '!.IzyzT1sqxXAwfdQazjwQpaNc)Wo1'
  });

  const [result, setResult] = useState({
    data: [],
    hasMore: false,
  });

  const sortParameters = {
    'activity': 'activity',
    'creation': 'creation',
    'votes': 'votes',
  }

  function changeSortType(value) {
    changeSelectedData("sort", value, setStates, setResult);
  }

  function changeOrderType(value) {
    changeSelectedData("order", value, setStates, setResult);
  }

  function changePageSize(value) {
    changeSelectedData("pagesize", value, setStates, setResult);
  }

  function search(value) {
    changeSelectedData("intitle", value, setStates, setResult);
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();

    apiGetRequest(...createQuestionsRequest('questions', states), source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [states]);

  return (
    <>
      <Search searchFunction={search} />
      <SelectButtonsList>
        <SelectButton options={sortParameters} action={changeSortType} />
        <SelectButton options={info.pageSizeParams} action={changePageSize} />
        <SelectButton options={info.orderParameters} action={changeOrderType} />
      </SelectButtonsList>
      <div className="pt-2">
        {states.intitle.length > 0 && <p className='m-0'>Search: {states.intitle}</p>}
        {states.tagged && <p className='m-0'>Tagged: {states.tagged}</p>}
      </div>
      <QuestionsContainer questions={result.data} />
      <LoadMore propName='page' setStates={setStates} show={result.hasMore} />
    </>
  )
}

export default Questions;