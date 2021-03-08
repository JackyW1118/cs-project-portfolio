import React from "react";

const Hero = ({ project }) => {
  const heroText = project;
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div className="d-flex flex-column">
          <h1 class="display-5 align-self-center" style={{ color: "white" }}>
            {heroText}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
