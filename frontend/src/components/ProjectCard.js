import React from "react";

const ProjectCard = ({ proj }) => {
  const renderedTechs = proj.technical_details
    .split("/")
    .map((stack, index) => {
      if (index < 4) {
        return (
          <span className="lead">
            <span className="badge badge-pill badge-secondary mr-2 mb-1">
              {stack}
            </span>
          </span>
        );
      }
    });
  return (
    <div className="card proj-card shadow border-0">
      <div
        className="inner-card"
        style={{
          backgroundImage: `url(${proj.front_image})`,
        }}
      >
        <div className="name-card d-flex flex-column">
          <h1 className="mx-auto my-auto w-75">{proj.title}</h1>
        </div>

        <div class="proj-short d-flex flex-column">
          <p className="p my-auto mx-auto w-75">{proj.short_description}</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h5 className="card-title mt-2 ml-2">{proj.project_type}</h5>
        <div className="tech-list">
          <div class="d-flex flex-wrap ml-2">{renderedTechs}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
