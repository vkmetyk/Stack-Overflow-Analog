import React from "react";

function LoadMore({ value, setValue }) {
  const changePageAction = function (event) {
    if (value?.page)
      setValue(prev => ({
        ...prev,
        page: prev.page + 1
      }));
  }

  return (
    <div className="load-more-container">
      <span className="load-more-button" onClick={changePageAction}>Load more</span>
    </div>
  );
}

export default LoadMore;