import React from "react";
import CommentsElement from "./CommentsElement";

function CommentsContainer({ comments, children }) {
  if (!comments || !Array.isArray(comments) || comments.length < 1)
    return <div id="user-comments" className="info-block collapse" />;

  return (
    <div id="user-comments" className="info-block collapse">
      {
        comments.map((post, index) =>
          <CommentsElement key={index} info={post} />
        )
      }
      {children}
    </div>
  )
}

export default CommentsContainer;