import React, {useEffect, useState} from "react";
import apiRequest from "./apiRequest";
import './css/profile.css'

function CreateListFromObject({ element }) {
  let html = [];

  for (let [key, value] of Object.entries(element)) {
    html.push(<p>{key} - {value}</p>);
  }

  return (
    <div className='list-item'>
      {html}
    </div>
  )
}

function DropListInfo({ fieldName, request, filter, sort }) {
  const [states, setStates] = useState({
    result: [],
    orderType: 'desc',
    sortType: sort[0],
  });

  function infoToggle(event) {
    if (!event.target.classList.contains("collapsed") && states.result.length <= 0) {
      console.log(request)
      // apiRequest(request, states, setStates, filter);
      console.log(states.result)
    }
  }

  return (
    <>
      {

        (<div className='info-container'>
          <button onClick={infoToggle} className="drop-down-button navbar-toggler navbar-light" data-toggle="collapse"
                  data-target={`#${fieldName}`} aria-expanded="false">
            {fieldName}
          </button>
          <div id={fieldName} className="info-block collapse">
            <div>
              {
                states?.result?.length > 0 ? (
                  states.result.map((elem, index) => <CreateListFromObject key={index} element={elem} />)
                ) : null
              }
            </div>
          </div>
        </div>)
      }
    </>
  )
}

// <DropListInfo fieldName='Questions' request={`users/${info.user_id}/`} filter='' sort={["activity", "creation", "votes"]} />
// <DropListInfo fieldName='Answers' request={`users/${info.user_id}/`} filter='' sort={["activity", "creation", "votes"]} />
// <DropListInfo fieldName='Comments' request={`users/${info.user_id}/`} filter='' sort={["activity", "creation", "votes"]} />
// <DropListInfo fieldName='Favorites' request={`users/${info.user_id}/`} filter='' />
// <DropListInfo fieldName='Notifications' request={`users/${info.user_id}/`} filter='' />
// <DropListInfo fieldName='Privileges' request={`users/${info.user_id}/`} filter='' />
// <DropListInfo fieldName='Tags' request={`users/${info.user_id}/`} filter='' />
// <DropListInfo fieldName='Badges' request={`users/${info.user_id}/`} filter='' />
// <DropListInfo fieldName='Associated accounts' request={`users/${info.user_id}/`} filter='' />
// <DropListInfo fieldName='Actions on timeline' request={`users/${info.user_id}/`} filter='' />

function ProfileContainer({ info }) {
  return (
    <div className='profile-container'>
      <div className='user-info-sector'>
        <DropListInfo fieldName='Posts' request={`users/${info.user_id}/posts`} filter='!0S26_TC*pRj7HABlKqHlX5sze' sort={["activity", "creation", "votes"]} />
        <DropListInfo fieldName='Questions' request={`users/${info.user_id}/questions`} filter='!0S26_TC*pRj7HABlKqHlX5sze' sort={["activity", "creation", "votes"]} />
        <DropListInfo fieldName='Answers' request={`users/${info.user_id}/answers`} filter='!0S26_TC*pRj7HABlKqHlX5sze' sort={["activity", "creation", "votes"]} />

      </div>
    </div>
  );
}

// function getProfileInformation(userId) {
//   /*
//   reputation-history?site=stackoverflow&filter=!4._jROgtwSUnfQ-u9
//
//   */
//
//   let result = {
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
//   };
// }

function Profile({ match }) {
  const [states, setStates] = useState({
    result: [],
    orderType: 'desc',
    sortType: 'reputation',
  });

  useEffect(() => {
    // apiRequest(`users/${match.params.id}`, states, setStates, '!LotZXNE5EIo8MVEChBjenD');
  }, []);

  useEffect(() => {
    // apiRequest(`users/${match.params.id}`, states, setStates, '!40k8_CQ20*YS1cGzi');
  }, [states.orderType, states.sortType]);

  return (
    <>
      {
        states?.result?.length > 0 ? (<ProfileContainer info={states.result[0]}/>) : null
      }
    </>
  );
}

export default Profile;