import React from "react";
import Project from "./Project";

const ProjectList = ({ projects }) => {
  console.log(projects);
  const renderedProjects = projects.map((proj) => {
    return <Project proj={proj} />;
  });
  return <div className="row">{renderedProjects}</div>;
};

export default ProjectList;
