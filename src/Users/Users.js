import React, {useState, useEffect} from "react";
import Axios from "axios";
import info from "../constants";
import './users-page.scss'
import SelectButtonsList from "../Shared/SelectButtonsList";
import SelectButton from "../Shared/SelectButton";
import LoadMore from "../Shared/LoadMore";
import UsersContainer from "./UsersContainer";
import apiGetRequest from "../addition-functions/apiGetRequest";
import saveApiResult from "../addition-functions/saveApiResult";
import changeSelectedData from "../addition-functions/changeSelectedData";

function Users() {
  const [states, setStates] = useState({
    sort: 'reputation',
    order: 'desc',
    page: 1,
    pagesize: info.pageSize,
    filter: '!LnNkvq0QFaTx49kzlezfZX',
  });

  const [result, setResult] = useState({
    data: [],
    hasMore: false,
  });

  const sortParameters = {
    'reputation': 'reputation',
    'creation': 'creation',
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

    apiGetRequest('users', states, source)
      .then(data => data && saveApiResult(data, setResult));

    return source.cancel;
  }, [states]);

  return (
    <>
      <SelectButtonsList>
        <SelectButton options={sortParameters} changeFunction={changeSortType} />
        <SelectButton options={info.pageSizeParams} changeFunction={changePageSize} />
        <SelectButton options={info.orderParameters} changeFunction={changeOrderType} />
      </SelectButtonsList>
      <UsersContainer users={result.data} />
      <LoadMore propName='page' setStates={setStates} show={result.hasMore} />
    </>
  )
}

export default Users;