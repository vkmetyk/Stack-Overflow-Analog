import SelectButton from "../Shared/SelectButton";
import info from "../constants";
import SelectButtonsList from "../Shared/SelectButtonsList";
import React, {useEffect, useState} from "react";
import Axios from "axios";
import './tags-page.scss'
import TagsContainer from "./TagsContainer";
import changeSelectedData from "../addition-functions/changeSelectedData";
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";
import LoadMore from "../Shared/LoadMore";

function Tags({ match }) {
  const [states, setStates] = useState({
    result: [],
    sort: 'popular',
    order: 'desc',
    page: 1,
    pagesize: info.pageSize,
    filter: '!6VAEe70SjjpEL',
  });

  const [result, setResult] = useState({
    data: [],
    hasMore: false,
  });

  const sortParameters = {
    'popularity': 'popular',
    'activity': 'activity',
    'name': 'name',
  }

  function changeSortType(value) {
    changeSelectedData("sort", value, setStates, setResult);
  }

  function changeOrderType(value) {
    changeSelectedData("order", value, setStates, setResult);
  }

  function changePageSize(value) {
    changeSelectedData("pagesize", value, setStates, setResult);
  }

  useEffect(() => {
    let source = Axios.CancelToken.source();

    apiGetRequest('tags', states, source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [states]);

  return (
    <>
      <SelectButtonsList>
        <SelectButton options={sortParameters} action={changeSortType} />
        <SelectButton options={info.pageSizeParams} action={changePageSize} />
        <SelectButton options={info.orderParameters} action={changeOrderType} />
      </SelectButtonsList>
      <TagsContainer tags={result.data} />
      <LoadMore propName='page' setStates={setStates} show={result.hasMore} />
    </>
  )
}

export default Tags;