import React, {useEffect, useState} from 'react';
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";
import LoadMore from "./LoadMore";
import {Link} from "react-router-dom";
import './css/tags.css'

function TagElement({ tag }) {
  const [states, setStates] = useState({
    result: []
  });

  useEffect(() => {
    apiRequest(`tags/${tag.name}/wikis`, states, setStates);
  }, []);

  return (
    <div className='tag-element'>
      <div className='tag-header'>
        <h3>
          <Link className="hyperlink" to={`/questions/tag/${tag.name}`}>
            {tag.name}
          </Link>
        </h3>
        <p className="tag-count">count: {tag.count}</p>
      </div>
      <div className='tag-body'>
        {
          states?.result[0]?.excerpt ?
          (<p className='tag-description'>{states.result[0].excerpt}</p>) :
          (<></>)
        }
      </div>
    </div>
  );
}

function Tags({ match }) {
  const [states, setStates] = useState({
    result: [],
    orderType: 'desc',
    sortType: 'activity',
    page: 1,
  });

  useEffect(() => {
    apiRequest('tags', states, setStates,
      {
        'filter': '!6UxhDX.C*dexD',
      }
    );
  }, [states.orderType, states.sortType, states.page]);

  return (
    <>
      <SortContainer
        setState={setStates}
        sortBy={["popular", "activity", "name"]}
        orderBy={["desc", "asc"]}
      />
      <div className="tags-container px-4">
        {
          states?.result?.map((tag, index) => tag ? (<TagElement key={index} tag={tag}/>) : null)
        }
      </div>
      <LoadMore value={states} setValue={setStates} />
    </>
  )
}

export default Tags;