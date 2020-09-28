import React, {useEffect, useState} from "react";
import Axios from "axios";
import './question-page.scss'
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";
import QuestionElement from "./QuestionElement";
import Loading from "../Shared/Loading";

function Question({ match }) {
  const [result, setResult] = useState({
    data: [],
  });

  useEffect(() => {
    let source = Axios.CancelToken.source();
    let questionId = match.params.id;

    apiGetRequest(`questions/${questionId}`, {
      'filter': '!2.jDQvoPjNGlykDlONa4S'
    }, source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [match]);

  if (!result.data || !Array.isArray(result.data) || result.data.length < 1)
    return <Loading showButton={true} />;

  return (
    <div className='question-page'>
      <div className='question-container'>
        <QuestionElement question={result.data[0]} />
      </div>
    </div>
  )
}

export default Question;