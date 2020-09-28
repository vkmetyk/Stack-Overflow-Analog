import React, {useEffect, useState} from "react";
import Axios from "axios";
import info from "../../constants";
import apiGetRequest from "../../addition-functions/apiGetRequest";
import saveApiResult from "../../addition-functions/saveApiResult";
import changeSelectedData from "../../addition-functions/changeSelectedData";
import SelectButton from "../../Shared/SelectButton";
import SelectButtonsList from "../../Shared/SelectButtonsList";
import AnswerElement from "./AnswerElement";
import LoadMore from "../../Shared/LoadMore";

function Answers({ questionId }) {
  const [states, setStates] = useState({
    order: 'desc',
    sort: 'activity',
    filter: '!7gohU5MDQSy_p7T.kce93ah4aR5SpR5ACT'
  });

  const [result, setResult] = useState({
    data: [],
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

  useEffect(() => {
    let source = Axios.CancelToken.source();

    apiGetRequest(`questions/${questionId}/answers`, states, source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [states, questionId]);

  if (!result.data || !Array.isArray(result.data) || result.data.length < 1)
    return null;

  return (
    <div className='answers'>
      <h2>Answers</h2>
      <SelectButtonsList>
        <SelectButton options={sortParameters} action={changeSortType} />
        <SelectButton options={info.orderParameters} action={changeOrderType} />
      </SelectButtonsList>
      <div className='answers-container container'>
        {result.data.map((answer, index) =>
          <AnswerElement key={index} answer={answer} />
        )}
      </div>
    </div>
  )
}

export default Answers;