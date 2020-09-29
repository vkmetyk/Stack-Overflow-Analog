import React from "react";
import LoadMore from "../../../Shared/LoadMore";

function DropDownContainer(props) {
  if (!props.elements || !Array.isArray(props.elements) || props.elements.length < 1)
    return null;

  return (
    <>
      {
        props.elements.map((element, index) =>
          React.cloneElement(props.children, { key: index, info: element })
        )
      }
      <LoadMore propName='page' setStates={props.setStates} show={props.hasMore} />
    </>
  )
}

export default DropDownContainer;