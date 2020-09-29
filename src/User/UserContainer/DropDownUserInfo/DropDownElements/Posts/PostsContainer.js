import React from "react";
import PostsElement from "./PostsElement";

function PostsContainer({ posts, postsType, children }) {
  if (!posts || !Array.isArray(posts) || posts.length < 1)
    return null;

  return (
    <>
      {
        posts.map((post, i) =>
          <PostsElement
            key={i}
            info={post}
            type={postsType === 'posts' ? post?.post_type : postsType}
          />
        )
      }
      {children}
    </>
  )
}

export default PostsContainer;