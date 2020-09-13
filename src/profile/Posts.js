import React, {useEffect, useState} from "react";
import apiRequest from "../apiRequest";
import SortContainer from "../SortContainer";
import Post from "./Post";
import LoadMore from "../LoadMore";

function Posts({ userId }) {
  const [states, setStates] = useState({
    result: [],
    sortType: 'activity',
    postType: 'posts',
    page: 1
  });

  function getPosts() {
    if (states.postType === 'posts')
      apiRequest(`users/${userId}/posts`, states, setStates,
        {'filter': '!0S26_9ChV8AgnNarhyg.41e-9'}
      );
    else if (states.postType === 'questions')
      apiRequest(`users/${userId}/questions`, states, setStates,
        {'filter': '!OfZM*tSwz0iTwz80evgIm*X)Di-7x-nupC-mbPQoPp.'}
      );
    else if (states.postType === 'answers')
      apiRequest(`users/${userId}/answers`, states, setStates,
        {'filter': '!Fcb(AXxRvierPnxCamr4CTrfQN'}
      );
  }

  function loadPosts(event) {
    if (states?.result?.length <= 0 && event && !event.target.classList.contains('collapsed')) {
      getPosts();
    }
  }

  useEffect(() => {
      getPosts();
  }, [states.postType, states.sortType, states.page]);

  return (
    <div>
      <button
        onClick={loadPosts}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target="#user-posts"
      >
        Posts
      </button>
      <div id="user-posts" className="info-block collapse">
        <SortContainer
          setState={setStates}
          sortBy={["activity", "creation", "votes"]}
          orderBy={["posts", "questions", "answers"]}
          posts={true}
        />
        {
          states?.result?.length > 0 ? states.result.map((post, i) =>
            <Post key={i} info={post} type={states.postType === 'posts' ? post?.post_type : states.postType} />) : null
        }
        <LoadMore value={states} setValue={setStates} />
      </div>
    </div>
  )
}

export default Posts;

// <div>
//   <button className="drop-down-button navbar-toggler navbar-light" data-toggle="collapse" data-target="#user-posts">
//     Posts
//   </button>
//   <div id="user-posts" className="info-block collapse">
//     <div>
//       <h1>Test</h1>
//     </div>
//   </div>
// </div>