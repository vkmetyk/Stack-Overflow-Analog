import React from "react";

function changeField (fieldName, value, setState) {
  setState(states => ({
    ...states,
    page: 1,
    result: [],
    [fieldName]: value
  }));
}

function SortContainer(props) {
  let changeSortType = (event) => changeField("sortType", event.target.value, props.setState);
  let changeOrderType = (event) => changeField("orderType", event.target.value, props.setState);
  let changePostType = (event) => changeField("postType", event.target.value, props.setState);

  return (
    <div className='sort-by-container px-4'>
      <select onChange={changeSortType} className="select-css">
        {props.sortBy.map((sortMethod, index) => (
          <option key={index} value={`${sortMethod}`}>{sortMethod}</option>
        ))}
      </select>
      <select onChange={props.posts ? changePostType : changeOrderType} className="select-css">
        {props.orderBy.map((orderType, index) => (
          <option key={index} value={`${orderType}`}>{orderType}</option>
        ))}
      </select>
    </div>
  )
}

export default SortContainer;