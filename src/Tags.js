import React, {useEffect, useState} from 'react';
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";

function TagElement({ tag }) {
  console.log(tag);
  return (
    <div>
      <h1>Tag</h1>
    </div>
  );
}

function Tags({ match }) {
  const [states, setStates] = useState({
    result: [], sortType: 'activity', orderType: 'desc'
  });

  useEffect(() => {
    apiRequest('tags', states, setStates);
  }, [states.orderType, states.sortType]);

  const changeSortType = (type) => setStates(states => ({
    ...states,
    sortType: type
  }));
  const changeOrderType = (type) => setStates(states => ({
    ...states,
    orderType: type
  }));

  return (
    <div className="questions-container">
      <SortContainer
        changeSortType={changeSortType}
        changeOrderType={changeOrderType}
        sortBy={["activity", "votes", "creation"]}
        orderBy={["desc", "asce"]}
      />
      {states?.result?.map(tag => (
        <TagElement key={tag.tag_id} tag={tag} />
      ))}
    </div>
  )
}

export default Tags;