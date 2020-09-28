import React, {useEffect, useState} from "react";
import info from "../../../../constants";
import Axios from "axios";
import apiGetRequest from "../../../../addition-functions/apiGetRequest";
import saveApiResult from "../../../../addition-functions/saveApiResult";
import PostsContainer from "./PostsContainer";
import LoadMore from "../../../../Shared/LoadMore";
import SelectButtonsList from "../../../../Shared/SelectButtonsList";
import SelectButton from "../../../../Shared/SelectButton";
import changeSelectedData from "../../../../addition-functions/changeSelectedData";

function getParamsForPosts(requestType, states) {
  let filter;

  if (requestType === 'posts')
    filter = '!0S26_9ChV8AgnNarhyg.41e-9'
  else if (requestType === 'questions')
    filter = '!OfZM*tSwz0iTwz80evgIm*X)Di-7x-nupC-mbPQoPp.'
  else
    filter = '!Fcb(AXxRvierPnxCamr4CTrfQN'

  return {...states, filter};
}

function Posts({ userId }) {
  const [requestType, setRequestType] = useState('posts');

  const [states, setStates] = useState({
    page: 1,
    pagesize: info.pageSize,
    order: 'desc',
    sort: 'activity',
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

  const requestTypes = {
    'posts': 'posts',
    'questions': 'questions',
    'answers': 'answers',
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

  function changeRequestType(value) {
    setRequestType(value);
    setStates({page: 1});
  }

  function buttonAction(event) {
    if (states?.result?.length <= 0 && event &&
      !event.target.classList.contains('collapsed')) {
      let source = Axios.CancelToken.source();

      apiGetRequest(`users/${userId}/${requestType}`,
        getParamsForPosts(requestType, states),
        source
      ).then(data => data && saveApiResult(data, setResult));

      return source.cancel;
    }
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();

    apiGetRequest(`users/${userId}/${requestType}`,
      getParamsForPosts(requestType, states),
      source
    ).then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [states, userId, requestType]);

  return (
    <div>
      <button
        onClick={buttonAction}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target="#user-posts"
      >
        Posts
      </button>
      <div id="user-posts" className="info-block collapse">
        <SelectButtonsList>
          <SelectButton options={sortParameters} action={changeSortType} />
          <SelectButton options={info.pageSizeParams} action={changePageSize} />
          <SelectButton options={requestTypes} action={changeRequestType} />
          <SelectButton options={info.orderParameters} action={changeOrderType} />
        </SelectButtonsList>
        <PostsContainer posts={result.data} postsType={requestType}>
          <LoadMore propName='page' setStates={setStates} show={result.hasMore} />
        </PostsContainer>
      </div>
    </div>
  )
}

export default Posts;