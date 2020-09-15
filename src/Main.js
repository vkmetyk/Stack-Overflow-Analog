import React, {useState, useEffect} from 'react';
import QuestionElement from "./QuestionElement";
import SortContainer from "./SortContainer";
import apiRequest from "./apiRequest";
import './css/questions.css'
import LoadMore from "./LoadMore";

function Main({ match, search }) {
  const [states, setStates] = useState({
    result: [],
    whatAsk: match?.params?.id ?? search,
    orderType: 'desc',
    sortType: 'activity',
    page: 1,
  });

  useEffect(() => {
    if (match?.params?.id ?? search) {
      setStates((prev) => ({
        ...prev,
        result: [],
        whatAsk: match?.params?.id ?? search
      }))
    }
  }, [search, match]);

  useEffect(() => {
    if (search) {
      apiRequest('search', states, setStates,
        {
          'filter': '!.IzyzT1sqxXAwfdQbRAfsZkXflu7X',
          'intitle': search,
        }
      );
    } else if (match?.params?.id) {
      apiRequest('questions', states, setStates,
        {
          'filter': '!.IzyzT1sqxXAwfdQbRAfsZkXflu7X',
          'tagged': match?.params?.id,
        }
      );
    } else {
      apiRequest('questions', states, setStates,
        {
          'filter': '!.IzyzT1sqxXAwfdQbRAfsZkXflu7X',
        }
      );
    }
  }, [states.orderType, states.sortType, states.page, states.whatAsk]);

  return (
    <>
      <SortContainer
        setState={setStates}
        sortBy={["activity", "votes", "creation"]}
        orderBy={["desc", "asc"]}
      />
      {
        match?.params?.id || search ?
        (
          <div className="px-4 pt-2">
            <p key={match?.params?.id || search}>{`${match?.params?.id ? 'Tag: ' + match.params.id :
              'Search: ' + search}`}</p>
          </div>
        ) : (<></>)
      }
      <div className="questions-container px-4">
        {states?.result?.map((question, index) =>
          question ? (<QuestionElement key={index} question={question} />) : null
        )}
      </div>
      <LoadMore value={states} setValue={setStates} />
    </>
  )
}

export default Main;