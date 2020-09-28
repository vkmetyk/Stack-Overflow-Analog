import React from "react";
import PropTypes from "prop-types";
import TagElement from "./TagElement";
import Loading from "../../Shared/Loading";

function TagsContainer({ tags }) {
  if (!tags || !Array.isArray(tags) || tags.length < 1)
    return <Loading showButton={true} />;

  return (
    <div className="tags-container">
      {
        tags.map((tag, index) =>
          <TagElement key={index} tag={tag}/>
        )
      }
    </div>
  )
}

TagsContainer.propTypes = {
  users: PropTypes.array
}

export default TagsContainer;