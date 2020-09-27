import React, {useState, useEffect} from "react";
import Axios from "axios";
import apiGetRequest from "../../addition-functions/apiGetRequest";
import saveApiResult from "../../addition-functions/saveApiResult";
import LoggedIn from "./LoggedIn";
import Incognito from "./Incognito";
import info from "../../constants";

function UserContainer() {
  const [result, setResult] = useState({
    data: [],
  });

  useEffect(() => {
    let source = Axios.CancelToken.source();

    if (info.access_token) {
      apiGetRequest('me', {
        'filter': '!0Z-UstkkN)KrxOtwVYF-rIL2q',
        'client_id': info.clientId,
        'key': info.key,
        'access_token': info.access_token,
      }, source)
        .then(data => data && saveApiResult(data, setResult));
    }

    return source.cancel;
  }, []);

  if (result?.data?.length > 0) {
    return (
      <div className="pl-3 pl-md-4">
        <LoggedIn userInfo={result.data[0]} />
      </div>
    )
  } else {
    return (
      <div className="pl-3 pl-md-4">
        <Incognito />
      </div>
    );
  }
}

export default UserContainer;