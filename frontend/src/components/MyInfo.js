import React from "react";
import axios from "axios";

const MyInfo = ({ myInfo }) => {
  return (
    <div className="d-flex flex-column myinfo-container justify-content-center">
      <h1 className="display-3 mb-4">
        <b>{myInfo.name}</b>
      </h1>
      <h5>{myInfo.current_role}</h5>
    </div>
  );
};

export default MyInfo;
