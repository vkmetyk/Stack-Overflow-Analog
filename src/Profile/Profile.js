import React, {useEffect, useState} from "react";
import Axios from "axios";
import info from "../constants";
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";
import UserContainer from "../User/UserContainer";
import ProfileHeader from "./ProfileHeader";

function Profile() {
  const [result, setResult] = useState({
    data: [],
  });

  const goToHomePath = () => window.location.href = '/';

  useEffect(() => {
    let source = Axios.CancelToken.source();

    if (info.access_token) {
      apiGetRequest('me', {
        'filter': '!BTeB3PYedCt9IgoX6G1K27Jyw*twsP',
        'client_id': info.clientId,
        'key': info.key,
        'access_token': info.access_token,
      }, source)
        .then(data => {
          if (data)
            saveApiResult(data, setResult)
          else
            goToHomePath();
        })
        .catch(error => goToHomePath())
    } else
      goToHomePath();

    return source.cancel;
  }, []);

  if (!result.data || result.data.length < 1)
    return null;

  return (
    <>
      <ProfileHeader />
      <UserContainer userInfo={result.data[0]} />
    </>
  )
}

export default Profile;