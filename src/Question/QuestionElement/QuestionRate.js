import React from "react";

function QuestionRate({ question }) {
  // const [states, setStates] = useState({
  //   action: '',
  //   data: {},
  //   upButton: false,
  //   downButton: false,
  // });
  //
  // useEffect(() => {
  //   changeButtonState(states.action, setStates);
  // }, [states.data]);
  //
  // function upVote(e) {
  //   let url = `questions/${question?.question_id}/upvote${states.upButton ? '/undo' : ''}`;
  //   let action = states.upButton ? 'upvote-undo' : 'upvote';
  //
  //   apiActionPrepare(url, action, setStates);
  // }
  //
  // function downVote(e) {
  //   let url = `questions/${question?.question_id}/downvote${states.upButton ? '/undo' : ''}`;
  //   let action = states.upButton ? 'downvote-undo' : 'downvote';
  //
  //   apiActionPrepare(url, action, setStates);
  // }

  // return (
  //   <div className='question-rate'>
  //     <div>
  //       <button
  //         onClick={upVote}
  //         className={`action-button ${states.upButton ? 'rated' : ''}`}
  //       >
  //         <img className='top-img' src="/images/down-arrow.png" alt="like"/>
  //       </button>
  //       <p>{question?.score}</p>
  //       <button
  //         onClick={downVote}
  //         className={`action-button ${states.downButton ? 'rated' : ''}`}
  //       >
  //         <img src="/images/down-arrow.png" alt="dislike"/>
  //       </button>
  //     </div>
  //   </div>
  // )
  return (
    <div>
      
    </div>
  )
}

export default QuestionRate;