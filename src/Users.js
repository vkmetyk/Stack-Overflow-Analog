import React, {useEffect, useState} from 'react';
import SortContainer from "./SortContainer";

function UserElement({ user }) {
  console.log(user);
  return (
    <div>
      <h1>User</h1>
    </div>
  );
}

function Users({ match }) {
  const [states, setStates] = useState({
    users: [], sortType: 'activity', orderType: 'desc'
  });

  const fetchUsers = async () => {
    const data = await fetch(
      `https://api.stackexchange.com/2.2/users?
      order=${states.orderType}&
      sort=${states.sortType}&
      site=stackoverflow`
    );
    const apiResult = await data.json();
    console.log(apiResult);
    setStates(states => ({
      ...states,
      users: apiResult?.items
    }));
  };

  useEffect(() => {
    fetchUsers();
  }, [states.orderType, states.sortType]);

  const changeSortType = (type) => setStates(states => ({
    ...states,
    sortType: type
  }));
  const changeOrderType = (type) => setStates(states => ({
    ...states,
    orderType: type
  }));

  return (
    <div className="questions-container">
      <SortContainer
        changeSortType={changeSortType}
        changeOrderType={changeOrderType}
        sortBy={["activity", "votes", "creation"]}
        orderBy={["desc", "asce"]}
      />
      {states?.users?.map(user => (
        <UserElement key={user.user_id} user={user} />
      ))}
    </div>
  )
}

export default Users;