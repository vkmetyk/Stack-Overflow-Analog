import React, {useEffect, useState} from "react";
import Axios from "axios";
import './question-page.scss'
import apiGetRequest from "../../../addition-functions/apiGetRequest";
import saveApiResult from "../../../addition-functions/saveApiResult";
import changeSelectedData from "../../../addition-functions/changeSelectedData";
import LoadMore from "../../../Shared/LoadMore";
import ToggleButton from "./ToggleButton";
import CommentElement from "./CommentElement/CommentElement";
import AnswerElement from "../AnswerElement";
import SelectButton from "../../../Shared/SelectButton";
import info from "../../../constants";
import SelectButtonsList from "../../../Shared/SelectButtonsList";

function Comments({ questionId }) {
  const [toggleShow, settoggleShow] = useState(false);

  const [states, setStates] = useState({
    order: 'desc',
    sort: 'votes',
    filter: '!.FjwOpcQLSghsalVhG21THrWdM7j.'
  });

  const [result, setResult] = useState({
    data: [],
    hasMore: false
  });

  const sortParameters = {
    'votes': 'votes',
    'creation': 'creation',
  }

  function changeSortType(value) {
    changeSelectedData("sort", value, setStates, setResult);
  }

  function changeOrderType(value) {
    changeSelectedData("order", value, setStates, setResult);
  }

  function showComments() {
    settoggleShow(!toggleShow);
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();

    if (toggleShow) {
      apiGetRequest(`questions/${questionId}/answers`, states, source)
        .then(data => data && saveApiResult(data, setResult));
    }

    return source.cancel;
  }, [states, toggleShow, questionId]);

  if (toggleShow && result.data.length < 1)
    return null;
  else if (!toggleShow) {
    return (
      <div className='comments'>
        <ToggleButton toggleFunction={showComments}>
          Show Comments
        </ToggleButton>
      </div>
    )
  }

  return (
    <div className='comments'>
      <ToggleButton toggleFunction={showComments}>
        Show Comments
      </ToggleButton>
      <SelectButtonsList>
        <SelectButton options={sortParameters} changeFunction={changeSortType} />
        <SelectButton options={info.orderParameters} changeFunction={changeOrderType} />
      </SelectButtonsList>
      <div className='comments-container container'>
        {result.data.map(comment =>
          <CommentElement key={comment?.comment_id} comment={comment} />
        )}
      </div>
      <LoadMore propName='page' setStates={setStates} show={result.hasMore} />
    </div>
  )
}

export default Comments;