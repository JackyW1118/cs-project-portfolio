import React from "react";

const Project = ({ proj }) => {
  const renderedTechs = proj.technical_details.split("/").map((stack) => {
    return (
      <span className="badge badge-pill badge-secondary mr-2 mb-1">
        {stack}
      </span>
    );
  });
  return (
    <div className="col-md-6 mb-3">
      <div
        className="card proj-card"
        style={{
          backgroundImage: `url(${proj.front_image})`,
        }}
      >
        <div class="proj-short card proj-card d-flex flex-column">
          <h4 className="card-title mt-2 ml-2">{proj.title}</h4>
          <p className="card-text align-self-center" style={{ margin: "auto" }}>
            {proj.short_description}
          </p>
        </div>
        <h4 className="card-title mt-2 ml-2">{proj.title}</h4>
        <div className="tech-list">
          <div class="d-flex flex-wrap ml-2">{renderedTechs}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
