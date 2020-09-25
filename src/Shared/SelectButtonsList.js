import React from "react";

function SelectButtonsList(props) {
  return (
    <div className='select-buttons-block'>
      {props.children}
    </div>
  )
}

export default SelectButtonsList;