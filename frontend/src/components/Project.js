import React from "react";

const Project = ({ proj }) => {
  const renderedTechs = proj.technical_details.split("/").map((stack) => {
    return (
      <span className="badge badge-pill badge-primary mr-2 mb-1">{stack}</span>
    );
  });
  return (
    <div className="card proj-card shadow proj-outer-card">
      <h4 className="card-title mt-2 ml-2">{proj.title}</h4>
      <div className="tech-list">
        <div class="d-flex flex-wrap ml-2">{renderedTechs}</div>
      </div>
      <div
        className="inner-card"
        style={{
          backgroundImage: `url(${proj.front_image})`,
        }}
      >
        <div class="proj-short d-flex flex-column">
          <p className="p my-auto mx-auto w-75">{proj.short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
