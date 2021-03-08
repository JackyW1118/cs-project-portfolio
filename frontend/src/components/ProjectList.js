import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log(projects);
  const renderedProjects = projects.map((proj) => {
    return (
      <Link to={`/${proj.slug}`} className="col-md-6 mb-3">
        <Project proj={proj} />
      </Link>
    );
  });
  return <div className="row">{renderedProjects}</div>;
};

export default ProjectList;
