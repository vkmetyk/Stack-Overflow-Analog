import React from "react";

function SelectButtonsList(props) {
  return (
    <div className='select-buttons-container'>
      {props.children}
    </div>
  )
}

export default SelectButtonsList;