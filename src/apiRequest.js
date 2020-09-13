async function apiRequest(whatAsk, states, setStates, additionArguments) {
  let requestString = `https://api.stackexchange.com/2.2/${whatAsk}?` +
    `${states.page ? `page=${states.page}&pagesize=1&` : ''}` +
    `${states.orderType ? `order=${states.orderType}&` : ''}` +
    `${states.sortType ? `sort=${states.sortType}&` : ''}`;

  if (additionArguments) {
    for (let [key, value] of Object.entries(additionArguments)) {
      requestString = requestString + `${key}=${value}&`
    }
  }
  requestString = requestString + `site=stackoverflow`;

  const data = await fetch(requestString);
  const apiResult = (await data.json()) ?? [];
  // console.log(JSON.stringify(apiResult))
  // const apiResult = {"items":[{"badge_counts":{"bronze":8811,"silver":8536,"gold":771},"view_count":1972902,"answer_count":35080,"question_count":50,"reputation":1206198,"creation_date":1222430705,"user_id":22656,"about_me":"<p>\nAuthor of <a href=\"https://www.manning.com/books/c-sharp-in-depth-fourth-edition?a_aid=jonskeet&a_bid=66d590c3\" rel=\"nofollow noreferrer\">C# in Depth</a>.<br>\nCurrently a software engineer at Google, London.<br>\nUsually a Microsoft MVP (C#, 2003-2010, 2011-)\n</p>\n\n<p>Sites:</p>\n\n<ul>\n<li><a href=\"http://csharpindepth.com\" rel=\"nofollow noreferrer\">C# in Depth</a>\n<li><a href=\"http://codeblog.jonskeet.uk\" rel=\"nofollow noreferrer\">Coding blog</a>\n<li><a href=\"http://jonskeet.uk/csharp\" rel=\"nofollow noreferrer\">C# articles</a>\n<li><a href=\"http://twitter.com/jonskeet\" rel=\"nofollow noreferrer\">Twitter updates (@jonskeet)</a>\n</ul>\n\n<p>Email: skeet@pobox.com (but please read <a href=\"https://codeblog.jonskeet.uk/2012/08/22/stack-overflow-and-personal-emails/\" rel=\"nofollow noreferrer\">my blog post on Stack Overflow-related emails</a> first)</p>\n","location":"Reading, United Kingdom","profile_image":"https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=128&d=identicon&r=PG","display_name":"Jon Skeet"}]}
  // console.log(requestString, apiResult);
  setStates(states => ({
    ...states,
    result: states.result.concat(apiResult?.items)
  }));
}

export default apiRequest;