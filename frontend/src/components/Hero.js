import React from "react";

const Hero = ({ project }) => {
  return (
    <div class="jumbotron jumbotron-fluid py-5">
      <div class="container">
        <div className="d-flex flex-column">
          <h1 class="display-5 align-self-center" style={{ color: "white" }}>
            {project}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
