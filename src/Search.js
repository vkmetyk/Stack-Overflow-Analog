import React from "react";
import Main from "./Main";

function Search({ match }) {
  return (
    <>
      {
        match?.params?.id ? <Main search={match.params.id} /> : null
      }
    </>
  )
}

export default Search;