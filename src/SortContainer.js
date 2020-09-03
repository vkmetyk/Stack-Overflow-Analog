import React from "react";

function SortContainer(props) {
  let changeSortType = (event) => props.changeSortType(event.target.value);
  let changeOrderType = (event) => props.changeOrderType(event.target.value);

  return (
    <div className='sort-by-container'>
      <select onChange={changeSortType} className="select-css">
        {props.sortBy.map((sortMethod, index) => (
          <option key={index} value={`${sortMethod}`}>{sortMethod}</option>
        ))}
      </select>
      <select onChange={changeOrderType} className="select-css">
        {props.orderBy.map((orderType, index) => (
          <option key={index} value={`${orderType}`}>{orderType}</option>
        ))}
      </select>
    </div>
  )
}

export default SortContainer;