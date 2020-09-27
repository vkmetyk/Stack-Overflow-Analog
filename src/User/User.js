import React, {useEffect, useState} from "react";
import Axios from "axios";
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";
import UserContainer from "./UserContainer";

function User({ match }) {
  const [result, setResult] = useState({
    data: [],
  });

  useEffect(() => {
    let source = Axios.CancelToken.source();
    let userId = match.params.id;

    apiGetRequest(`users/${userId}`, {
      'filter': '!BTeB3PYedCt9IgoX6G1K27Jyw*twsP'
    }, source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [match]);

  if (!result.data || result.data.length < 1)
    return null;

  return (
    <UserContainer userInfo={result.data[0]} />
  )
}

export default User;