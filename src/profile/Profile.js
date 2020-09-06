import React, {useEffect, useState} from "react";
import apiRequest from "../apiRequest";
import '../css/profile.css'
import UserBasicInformation from "./UserBasicInformation";

function ProfileContainer({ userInfo }) {
  function validateUserInfo(userInfo) {
    return true;
  }

  if (validateUserInfo(userInfo))
    return (
      <div className='profile-container'>
        <UserBasicInformation userInfo={userInfo} />
      </div>
    );
  else
    return null;
}

//     reputationChangesHistory: [],
//     posts: [],
//     questions: [],
//     answers: [],
//     comments: [],
//     favorites: [],
//     notifications: [],
//     privileges: [],
//     tags: [],
//     badges: [],
//     associatedAccounts: [],
//     actionsOnTimeline: [],

function Profile({ match }) {
  const [states, setStates] = useState({
    result: [],
  });

  useEffect(() => {
    apiRequest(`users/${match.params.id}`, states, setStates, '!BTeB3PYedCt9IgoX6G1K27Jyw*twsP');
  }, []);

  return (
    <>
      {
        states?.result?.length > 0 ? (<ProfileContainer userInfo={states.result[0]}/>) : null
      }
    </>
  );
}

export default Profile;