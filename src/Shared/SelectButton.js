import React from "react";
import PropTypes from 'prop-types';

function SelectButton({ options, changeFunction }) {
  function createOptions(options) {
    let optionsHtml = [];

    for (let [key, value] of Object.entries(options)) {
      optionsHtml.push(
        <option key={key} value={value}>{key}</option>
      )
    }
    return optionsHtml;
  }

  function onChangeFunction(event) {
    changeFunction(event.target.value);
  }

  return (
    <select onChange={onChangeFunction} className="select-button">
      {createOptions(options)}
    </select>
  )
}

SelectButton.propTypes = {
  options: PropTypes.object,
  changeFunction: PropTypes.func,
}

export default SelectButton;