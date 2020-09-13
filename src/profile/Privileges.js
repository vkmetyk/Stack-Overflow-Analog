import React, {useEffect, useState} from "react";
import apiRequest from "../apiRequest";
import LoadMore from "../LoadMore";

function Privilage({ info }) {
  return (
    <div className='list-item'>
      <div className='privilage'>
        <div className='privilage-reputation'>
          {info.reputation}
        </div>
        <div className='privilage-description'>
          {info.short_description}
        </div>
      </div>
    </div>
  )
}

function Privileges({ userId }) {
  const [states, setStates] = useState({
    result: [],
    page: 1
  });

  function loadTags(event) {
    if (states?.result?.length <= 0 && event?.target && !event.target.classList.contains('collapsed')) {
      apiRequest(`users/${userId}/privileges`, states, setStates,
        {
          'filter': '!*ME*IwgDRSRwONb5'
        }
      );
    }
  }

  useEffect(() => {
    if (states.page > 1)
      apiRequest(`users/${userId}/privileges`, states, setStates,
        {
          'filter': '!*ME*IwgDRSRwONb5'
        }
      );
  }, [states.page]);

  return (
    <div>
      <button
        onClick={loadTags}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target="#user-privileges"
      >
        Privileges
      </button>
      <div id="user-privileges" className="info-block collapse">
        {
          states?.result?.length > 0 ? states.result.map((post, i) => <Privilage key={i} info={post} />) : null
        }
        <LoadMore value={states} setValue={setStates} />
      </div>
    </div>
  )
}

export default Privileges;