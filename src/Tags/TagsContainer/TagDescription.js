import React, {useEffect, useState} from "react";
import Axios from "axios";
import apiGetRequest from "../../addition-functions/apiGetRequest";
import saveApiResult from "../../addition-functions/saveApiResult";

function TagDescription({ tagName }) {
  const [result, setResult] = useState({
    data: [],
  });

  useEffect(() => {
    let source = Axios.CancelToken.source();

    apiGetRequest(`tags/${encodeURIComponent(tagName)}/wikis`, {
      filter: '!20T5zgXrEUDPGjAmJQ)n5'
    }, source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [tagName]);

  if (!result.data || result.data.length < 1 || !result.data[0]?.excerpt)
    return null;

  return (
    <p className='tag-description'>
      {result.data[0].excerpt}
    </p>
  )
}

export default TagDescription;