import React from "react";

async function apiRequest(whatAsk, states, setStates, tag) {
  const data = await fetch(
    `https://api.stackexchange.com/2.2/${whatAsk}?` +
      `${states.page ? `page=${states.page}&pagesize=12&` : ''}` +
      `${states.orderType ? `order=${states.orderType}&` : ''}` +
      `${states.sortType ? `sort=${states.sortType}&` : ''}` +
      `${tag ? `tagged=${tag}&` : ''}` +
      `site=stackoverflow`
  );
  const apiResult = await data.json();

  console.log(apiResult);

  setStates(states => ({
    ...states,
    result: states.result.concat(apiResult?.items)
  }));
}

export default apiRequest;