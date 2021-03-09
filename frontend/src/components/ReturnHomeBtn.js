import React from "react";

const ReturnHomeBtn = () => {
  return (
    <button
      id="homeBtn"
      className="fa fa-arrow-left"
      title="Home Page"
      onClick={(e) => {
        document.location.href = "/";
      }}
    ></button>
  );
};

export default ReturnHomeBtn;
