import React from "react";

async function apiRequest(whatAsk, states, setStates) {
  const data = await fetch(
    `https://api.stackexchange.com/2.2/${whatAsk}?
      order=${states.orderType}&
      sort=${states.sortType}&
      site=stackoverflow`
  );
  const apiResult = await data.json();
  console.log(apiResult);
  setStates(states => ({
    ...states,
    result: apiResult?.items
  }));
}

export default apiRequest;