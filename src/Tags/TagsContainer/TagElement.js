import React from "react";
import {Link} from "react-router-dom";
import TagDescription from "./TagDescription";

function TagElement({ tag }) {
  if (!tag || typeof tag !== 'object' || !tag?.name)
    return null;

  return (
    <div className='tag-element'>
      <div className='tag-header'>
        <h3>
          <Link className="hyperlink" to={`/questions/tagged/${tag.name}`}>
            {tag.name}
          </Link>
        </h3>
        <p className="tag-count">count: {tag?.count || '0'}</p>
      </div>
      <div className='tag-body'>
        <TagDescription tagName={tag.name} />
      </div>
    </div>
  )
}

export default TagElement;