import React from "react";
import PropTypes from 'prop-types';

function LoadMore({ propName, setStates, show }) {
  function changePage(event) {
    setStates(prev => ({
      ...prev,
      [propName]: prev[propName] + 1
    }));
  }

  if (!show)
    return null;

  return (
    <div className="load-more-container">
      <span className="load-more-button" onClick={changePage}>Load more</span>
    </div>
  );
}

LoadMore.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  show: PropTypes.any
}

export default LoadMore;