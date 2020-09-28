import React from "react";

function PrivilegesElement({ info }) {
  return (
    <div className='list-item'>
      <div className='privilege'>
        <div className='privilege-reputation'>
          {info?.reputation || '0'}
        </div>
        <div className='privilege-description'>
          {info?.short_description || ''}
        </div>
      </div>
    </div>
  )
}

export default PrivilegesElement;