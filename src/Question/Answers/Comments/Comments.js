import React, {useEffect, useState} from "react";
import Axios from "axios";
import apiGetRequest from "../../../addition-functions/apiGetRequest";
import saveApiResult from "../../../addition-functions/saveApiResult";
import changeSelectedData from "../../../addition-functions/changeSelectedData";
import ToggleButton from "./ToggleButton";
import CommentElement from "./CommentElement/CommentElement";
import SelectButton from "../../../Shared/SelectButton";
import info from "../../../constants";
import SelectButtonsList from "../../../Shared/SelectButtonsList";

function Comments({ answerId }) {
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
      apiGetRequest(`answers/${answerId}/comments`, states, source)
        .then(data => data && saveApiResult(data, setResult));
    }

    return source.cancel;
  }, [states, toggleShow, answerId]);

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
        <span className='active'>Hide Comments</span>
      </ToggleButton>
      <SelectButtonsList>
        <SelectButton options={sortParameters} action={changeSortType} />
        <SelectButton options={info.orderParameters} action={changeOrderType} />
      </SelectButtonsList>
      <div className='comments-container container'>
        {result.data.map(comment =>
          <CommentElement key={comment?.comment_id} comment={comment} />
        )}
      </div>
    </div>
  )
}

export default Comments;