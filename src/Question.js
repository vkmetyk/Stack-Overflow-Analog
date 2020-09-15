import React, {useState, useEffect} from 'react';
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";
import './css/question.css'
import dateGoodView from "./dateGoodView";
import {Link} from "react-router-dom";

function QuestionRate({ question }) {
  return (
    <div className='question-rate'>
      <div>
        <button className='action-button'>
          <img className='top-img' src="/images/down-arrow.png" alt="like"/>
        </button>
        <p>{question.score}</p>
        <button className='action-button'>
          <img src="/images/down-arrow.png" alt="dislike"/>
        </button>
      </div>
    </div>
  )
}

function QuestionContainer({ question }) {
  return (
    <div className='question-container'>
      <QuestionRate question={question} />

      <div className='question-summary'>
        <div className='question-text'>
          <p className='question-title'>{question?.title}</p>
          <p className='question-numbers'>
            <span>Asked: {dateGoodView(question?.creation_date)}</span>
            <span>Answers: {question?.answer_count ?? 0}</span>
          </p>
          <p className='question-body' dangerouslySetInnerHTML={{__html: question?.body}} />
        </div>
        <div className='tags-and-user-info'>
          <div className="tags">
            {question.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className='user-info'>
            <div className="user-details">
              <Link to={`/users/${question.owner.user_id}`}>
                {question.owner.display_name}
              </Link>
              <div>
                <span className="reputation-score">Reputation: {question.owner.reputation}</span>
              </div>
            </div>
            <div className="user-icon-block">
              <div className="avatar-wrapper-32">
                <Link to={`/users/${question.owner.user_id}`}>
                  <img src={question.owner.profile_image} style={{width: "32px", height: "32px"}} className="user-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnswerRate({ answer }) {
  return (
    <div className='answer-rate'>
      {
        answer?.is_accepted ?
          <img className='tick' src="/images/tick.svg" alt="Mark as answered"/>
          : null
      }
      <div>
        <button className='action-button'>
          <img className='top-img' src="/images/down-arrow.png" alt="like"/>
        </button>
        <p>{answer.score}</p>
        <button className='action-button'>
          <img src="/images/down-arrow.png" alt="dislike"/>
        </button>
      </div>
    </div>
  )
}

function Answer({ answer }) {
  return (
    <div className='answer-container'>
      <AnswerRate answer={answer} />

      <div className='answer-summary'>
        <div className='answer-text'>
          <p className='answer-body' dangerouslySetInnerHTML={{__html: answer?.body}} />
        </div>
        <div className='addition-answer-info'>
          <div>
            <p>answered: {dateGoodView(answer?.creation_date)}</p>
          </div>
          <div className='user-info'>
            <div className="user-details">
              <Link to={`/users/${answer.owner.user_id}`}>
                {answer.owner.display_name}
              </Link>
              <div>
                <span className="reputation-score">Reputation: {answer.owner.reputation}</span>
              </div>
            </div>
            <div className="user-icon-block">
              <div className="avatar-wrapper-32">
                <Link to={`/users/${answer.owner.user_id}`}>
                  <img src={answer.owner.profile_image} style={{width: "32px", height: "32px"}} className="user-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Answers({ questionId }) {
  const [states, setStates] = useState({
    result: [],
    sortType: 'votes',
    orderType: 'desc',
    page: 1
  });

  useEffect(() => {
    apiRequest(`questions/${questionId}/answers`, states, setStates,
      {
        'filter': '!t)IWEyFiVBr1g2gi-RKES99pFA87w2q',
      }
    );
  }, [states.orderType, states.sortType, states.page]);

  return (
    <div className='answers'>
      {
        states.result && states.result?.length > 0 ?
          <>
            <h2>Answers</h2>
            <SortContainer
              setState={setStates}
              sortBy={["votes", "activity", "creation"]}
              orderBy={["desc", "asc"]}
            />
            {states.result.map((answer, index) => answer ?
              (<Answer
                key={index}
                answer={answer}
              />)
              : null
            )}
          </>
          : null
      }
    </div>
  );
}

function Question({ match }) {
  let questionId = match.params.id;

  const [states, setStates] = useState({
    result: []
  });

  useEffect(() => {
    if (questionId)
      apiRequest(`questions/${questionId}`, states, setStates,
        {'filter': '!2.jDQvoPjNGlykDlONa4S'}
      );
  }, []);

  return (
    <div className="questions-container">
      {
        states?.result && states?.result?.length === 1 ?
          (
            <>
              <QuestionContainer question={states.result[0]} />
              <Answers questionId={states.result[0]?.question_id}/>
            </>
          )
          : null
      }
    </div>
  )
}

export default Question;