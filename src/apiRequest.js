async function apiRequest(whatAsk, states, setStates, filter, tag) {
  const data = await fetch(
    `https://api.stackexchange.com/2.2/${whatAsk}?` +
      `${states.page ? `page=${states.page}&pagesize=1&` : ''}` +
      `${states.orderType ? `order=${states.orderType}&` : ''}` +
      `${states.sortType ? `sort=${states.sortType}&` : ''}` +
      `${filter ? `filter=${filter}&` : ''}` +
      `${tag ? `tagged=${tag}&` : ''}` +
      `site=stackoverflow`
  );
  const apiResult = (await data.json()) ?? [];
  // console.log(JSON.stringify(apiResult))
  // const apiResult = {"items":[{"badge_counts":{"bronze":8811,"silver":8536,"gold":771},"account_id":11683,"is_employee":false,"last_modified_date":1599239100,"last_access_date":1599307636,"reputation_change_year":51410,"reputation_change_quarter":13716,"reputation_change_month":978,"reputation_change_week":1422,"reputation_change_day":125,"reputation":1205908,"creation_date":1222430705,"user_type":"registered","user_id":22656,"accept_rate":86,"location":"Reading, United Kingdom","website_url":"http://csharpindepth.com","link":"https://stackoverflow.com/users/22656/jon-skeet","profile_image":"https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=128&d=identicon&r=PG","display_name":"Jon Skeet"}],"has_more":true,"quota_max":300,"quota_remaining":162}
  console.log(apiResult);
  setStates(states => ({
    ...states,
    result: states.result.concat(apiResult?.items)
  }));
}

export default apiRequest;