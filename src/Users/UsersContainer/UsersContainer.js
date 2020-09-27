import React from "react";
import PropTypes from 'prop-types';
import UserElement from "./UserElement";
import Loading from "../../Shared/Loading";

function UsersContainer({ users }) {
  if (!users || !Array.isArray(users) || users.length < 1)
    return <Loading />;

  return (
    <div className="users-container">
      {
        users.map(user =>
          <UserElement key={user?.user_id} user={user} />
        )
      }
    </div>
  )
}

UsersContainer.propTypes = {
  users: PropTypes.array
}

export default UsersContainer;