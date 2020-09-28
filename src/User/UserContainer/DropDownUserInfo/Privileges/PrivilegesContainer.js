import React from "react";
import PrivilegesElement from "./PrivilegesElement";

function PrivilegesContainer({ privileges, children }) {
  if (!privileges || !Array.isArray(privileges) || privileges.length < 1)
    return <div id="user-privileges" className="info-block collapse" />;

  return (
    <div id="user-privileges" className="info-block collapse">
      {
        privileges.map((post, index) =>
          <PrivilegesElement key={index} info={post} />
        )
      }
      {children}
    </div>
  )
}

export default PrivilegesContainer;