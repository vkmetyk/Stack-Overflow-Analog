import React, {useEffect, useState} from "react";
import apiRequest from "../apiRequest";
import UserBasicInformation from "./UserBasicInformation";
import Posts from "./Posts";
import Comments from "./Comments";
import TopTags from "./TopTags";
import Privileges from "./Privileges";
import '../css/profile.css'

function ProfileContainer({ userInfo }) {
  function validateUserInfo(userInfo) {
    return true;
  }

  if (validateUserInfo(userInfo))
    return (
      <div className='profile-container'>
        <UserBasicInformation userInfo={userInfo} />
        <div className='user-drop-info-sector'>
          <Posts userId={userInfo.user_id} />
          <Comments userId={userInfo.user_id} />
          <TopTags userId={userInfo.user_id} />
          <Privileges userId={userInfo.user_id} />
        </div>
      </div>
    );
  else
    return null;
}

//     reputationChangesHistory: [],
// +     posts: [],
// +     questions: [],
// +     answers: [],
// +     comments: [],
//     favorites: [],
//     notifications: [],
// +     privileges: [],
// +     tags: [],
// +     badges: [],
//     associatedAccounts: [],
//     actionsOnTimeline: [],

function Profile({ match }) {
  const [states, setStates] = useState({
    result: [],
  });

  useEffect(() => {
    let userId = match.params.id;

    if (match?.params?.id && match?.params?.id !== 'profile') {
      apiRequest(`users/${userId}`, states, setStates,
        {'filter': '!BTeB3PYedCt9IgoX6G1K27Jyw*twsP'}
      );
    } else {
      let token = localStorage.getItem('userToken');

      if (token) {
        apiRequest(`me`, states, setStates,
          {
            'filter': '!BTeB3PYedCt9IgoX6G1K27Jyw*twsP',
            'client_id': '18651',
            'key': 'xzf5GeIyy1QHmRTuxM3ZjA((',
            'access_token': token
          }
        );
      }
    }
  }, []);

  return (
    <>
      {
        states?.result && states?.result[0] ? (<ProfileContainer userInfo={states?.result[0]}/>) : null
      }
    </>
  );
}

export default Profile;