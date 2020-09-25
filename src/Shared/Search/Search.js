import React, {useState} from "react";
import PropTypes from 'prop-types';
import './Search.scss'

function Search({ searchFunction }) {
  let [states, setStates] = useState({
    value: ''
  });

  function handleInput(e) {
    setStates({
      value: e.target.value
    });
  }

  function Find(e) {
    if (states.value.length > 0 && searchFunction) {
      searchFunction(states.value);
    }
  }

  return (
    <div className="search-container">
      <input
        onChange={handleInput}
        className="search-input"
        value={states.value}
        type="text"
        placeholder="Search.."
      />
      <div onClick={Find} className="search-button">
        <img src="/images/search.png" alt="search" />
      </div>
    </div>
  )
}

Search.propTypes = {
  searchFunction: PropTypes.func
}

export default Search;