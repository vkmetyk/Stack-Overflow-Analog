import React from "react";
import PropTypes from "prop-types";

function ToggleButton({ toggleFunction, children }) {
  function toggle(e) {
    toggleFunction();
  }

  return (
    <div className='toggle-container'>
      <span onClick={toggle} className='toggle-button'>{children}</span>
    </div>
  )
}

ToggleButton.propTypes = {
  toggleFunction: PropTypes.func,
  children: PropTypes.any
}

export default ToggleButton;