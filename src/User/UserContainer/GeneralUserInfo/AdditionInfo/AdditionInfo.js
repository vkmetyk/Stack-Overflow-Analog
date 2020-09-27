import React from "react";
import InfoList from "./InfoList";

function AdditionInfo({ userInfo }) {
  return (
    <div className='addition-info'>
      <div className='info-stats'>
        <div>
          <p>{userInfo?.answer_count || '0'}</p>
          <span>answers</span>
        </div>
        <div>
          <p>{userInfo?.question_count || '0'}</p>
          <span>questions</span>
        </div>
      </div>
      <InfoList userInfo={userInfo} />
    </div>
  )
}

export default AdditionInfo;