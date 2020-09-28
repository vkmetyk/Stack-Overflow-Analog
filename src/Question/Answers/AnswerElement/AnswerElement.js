import React from "react";
import AnswerAdditionInfo from "./AnswerAdditionInfo";
import Comments from "../Comments";

function AnswerElement({ answer }) {
  return (
    <div className='answer'>
      <div className='answer-element element'>
        {/*<AnswerRate answer={answer} />*/}
        <div className='summary'>
          <div className='text'>
            <p
              className='body'
              dangerouslySetInnerHTML={{__html: answer?.body}}
            />
          </div>
          <AnswerAdditionInfo answer={answer} />
        </div>
      </div>
      <div className='answer-footer'>
        <Comments answerId={answer?.answer_id} />
      </div>
    </div>
  )
}

export default AnswerElement;