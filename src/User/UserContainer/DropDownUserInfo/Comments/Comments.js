import React, {useEffect, useState} from "react";
import info from "../../../../constants";
import Axios from "axios";
import apiGetRequest from "../../../../addition-functions/apiGetRequest";
import saveApiResult from "../../../../addition-functions/saveApiResult";
import CommentsContainer from "./CommentsContainer";
import LoadMore from "../../../../Shared/LoadMore";

function Comments({ userId }) {
  const [states, setStates] = useState({
    page: 1,
    pagesize: info.pageSize,
    filter: '!1zSk2TL5Pj8578G.o71ZB'
  });

  const [result, setResult] = useState({
    data: [],
    hasMore: false,
  });

  function loadComments(event) {
    if (result?.data?.length <= 0 && event?.target &&
      !event.target.classList.contains('collapsed')) {
      let source = Axios.CancelToken.source();

      apiGetRequest(`users/${userId}/comments`, states, source)
        .then(data => data && saveApiResult(data, setResult));

      return source.cancel;
    }
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();

    if (states.page > 1) {
      apiGetRequest(`users/${userId}/comments`, states, source)
        .then(data => data && saveApiResult(data, setResult));
    }

    return source.cancel;
  }, [states, userId]);

  return (
    <div>
      <button
        onClick={loadComments}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target="#user-comments"
      >
        Comments
      </button>
      <CommentsContainer comments={result.data}>
        <LoadMore propName='page' setStates={setStates} show={result.hasMore} />
      </CommentsContainer>
    </div>
  )

}

export default Comments;