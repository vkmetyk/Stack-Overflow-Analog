import React, {useEffect, useState} from 'react';
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";
import LoadMore from "./LoadMore";
import {Link} from "react-router-dom";

function TagElement({ tag }) {
  const [states, setStates] = useState({
    result: []
  });

  useEffect(() => {
    apiRequest(`tags${tag.name}/wikis`, states, setStates);
    console.log(states.result);
  }, []);

  return (
    <div>
      <h3>
        <Link className="hyperlink" to={`/questions/tag/${tag.name}`}>
          {tag.name}
        </Link>
      </h3>
      <p>{tag.count}</p>
      {
        states.result[0].excerpt ?
        (<p>{states.result[0].excerpt}</p>) :
        (<></>)
      }
    </div>
  );
}

function Tags({ match }) {
  const [states, setStates] = useState({
    result: [], sortType: 'activity', orderType: 'desc'
  });

  useEffect(() => {
    apiRequest('tags', states, setStates);
    console.log(states.result);
  }, [states.orderType, states.sortType]);

  return (
    <>
      <SortContainer
        setState={setStates}
        sortBy={["popularity", "activity", "name"]}
        orderBy={["desc", "asc"]}
      />
      <div className="tags-container px-4">
        {states?.result?.map((tag, index) => (
          <TagElement key={index} tag={tag} />
        ))}
      </div>
      <LoadMore value={states} setValue={setStates} />
    </>
  )
}

export default Tags;