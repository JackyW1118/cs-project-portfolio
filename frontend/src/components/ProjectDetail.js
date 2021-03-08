import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      const { data } = await axios.get(
        `/api/project-list/?slug=${match.params.slug}`
      );
      setProject(data[0]);
    };
    getProject();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <Hero project={project.title} />
      </div>
      <div className="row justify-content-center detail-row">
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <h5>Details: </h5>
              {project.description}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm">
              <h5>Key Features: </h5>
              <ul className="list-unstyled"></ul>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm">
              <h5>Technology Used: </h5>
              <ul className="list-unstyled"></ul>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <img className="img-main" src={project.front_image} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="row detail-row">
        <div className="h5 col-sm mb-5">
          <a
            href={project.project_link}
            className="btn btn-primary"
            style={{ color: "white" }}
          >
            Live Project
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetail;
