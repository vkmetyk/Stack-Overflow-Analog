import React, {useEffect, useState} from "react";
import info from "../../../constants";
import Axios from "axios";
import apiGetRequest from "../../../addition-functions/apiGetRequest";
import saveApiResult from "../../../addition-functions/saveApiResult";
import DropDownContainer from "./DropDownContainer";

function DropDownItem({ whatAsk, itemName, filter, children }) {
  const [states, setStates] = useState({
    page: 1,
    pagesize: info.pageSize,
    filter: filter
  });

  const [result, setResult] = useState({
    data: [],
    hasMore: false,
  });

  function loadElements(event) {
    if (result?.data?.length <= 0 && event?.target &&
      !event.target.classList.contains('collapsed')) {
      let source = Axios.CancelToken.source();

      apiGetRequest(`${whatAsk}`, states, source)
        .then(data => data && saveApiResult(data, setResult));

      return source.cancel;
    }
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();

    if (states.page > 1) {
      apiGetRequest(`${whatAsk}`, states, source)
        .then(data => data && saveApiResult(data, setResult));
    }

    return source.cancel;
  }, [states, whatAsk]);

  return (
    <div>
      <button
        onClick={loadElements}
        className="drop-down-button navbar-toggler navbar-light"
        data-toggle="collapse" data-target={`#user-${itemName}`}
        children={itemName}
      />
      <div id={`user-${itemName}`} className="info-block collapse">
        <DropDownContainer
          elements={result.data}
          setStates={setStates}
          hasMore={result.hasMore}
          children={children}
        />
      </div>
    </div>
  )

}

export default DropDownItem;