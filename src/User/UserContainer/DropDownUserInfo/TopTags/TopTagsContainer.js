import React from "react";
import TopTagsElement from "./TopTagsElement";

function TopTagsContainer({ topTags, children }) {
  if (!topTags || !Array.isArray(topTags) || topTags.length < 1)
    return <div id="user-tags" className="info-block collapse" />;

  return (
    <div id="user-tags" className="info-block collapse">
      {
        topTags.map((post, index) =>
          <TopTagsElement key={index} info={post} />
        )
      }
      {children}
    </div>
  )
}

export default TopTagsContainer;