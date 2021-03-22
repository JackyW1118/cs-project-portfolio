import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const ProjectCardList = ({ projects, showAll }) => {
  const renderedProjects = projects.map((proj) => {
    //get project object from the Home component passed as prop
    if (proj.visible) {
      if (showAll || proj.featured) {
        return (
          //dynamic linking use slug as path
          <Link to={`/project/${proj.slug}`} className="col-md-4 mb-3">
            {/* pass proj from Home component to Project component to render the cards on home */}
            <ProjectCard proj={proj} />
          </Link>
        );
      }
    }
  });
  return <div className="row">{renderedProjects}</div>;
};

export default ProjectCardList;
