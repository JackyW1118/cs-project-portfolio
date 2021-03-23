import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import ProjectFeatureList from "./ProjectFeatureList";
import CodeSampleList from "./CodeSampleList";

const ProjectDetail = ({ match }) => {
  //initalzie state stores the project object
  const [project, setProject] = useState({
    key_features: "",
    technical_details: "",
  });

  /*initalzie state stores the key feature object, state is updated using
  a call back passed into the ProjectFeatureList component*/
  const [keyFeatures, setKeyFeatures] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  //make a get request to retrieve the project with slug that is the path of current url
  const getProject = async () => {
    const { data } = await axios.get(
      `/api/project-list/?slug=${match.params.slug}`
    );
    //set state to empty object if request returns empty array
    if (data.length === 0) {
      setProject({});
    }
    //else set it to the first match because there will only be one match
    else setProject(data[0]);
  };

  //render key feature list
  const renderedKeyFeatures = keyFeatures.map(({ feature_title }) => {
    return (
      <li className="mb-2" style={{ textAlign: "center" }}>
        <a href={`#${feature_title}`}>{feature_title}</a>
      </li>
    );
  });

  //render the tech badges
  const renderedTechs =
    //return null if state project is empty
    Object.keys(project).length === 0
      ? null
      : project.technical_details.split("/").map((tech) => {
          return (
            <span className="lead">
              <span className="badge badge-pill badge-primary mr-2 mb-1">
                {tech}
              </span>
            </span>
          );
        });

  //if state project is empty object redirect to 404 page
  return Object.keys(project).length === 0 ? (
    <Redirect to="/404" />
  ) : (
    <>
      <div className="other-bg" />
      <div className="container mb-3">
        <div className="proj-inner mt-3 d-flex flex-column">
          <h5 className="text-muted">{project.project_type}</h5>
          <h2 className="text-white display-4">{project.title}</h2>
          <p className="text-white lead">{project.description}</p>
          <div className="d-flex flex-wrap">{renderedTechs}</div>
          <div className="d-flex flex-wrap mt-4">
            <a
              class="btn btn-danger mr-2 text-white"
              target="_blank"
              rel="noopener noreferrer"
              href={project.project_link}
            >
              <i class="fa fa-desktop mr-2"></i>
              Live
            </a>
            <a
              class="btn btn-secondary text-white bg-dark"
              target="_blank"
              rel="noopener noreferrer"
              href={project.github_url}
            >
              <i class="fa fa-github mr-2"></i>
              Github
            </a>
          </div>
          <h3 className="text-white mt-5">
            <i class="fa fa-link mr-2"></i>Feature Links
          </h3>
          <ol className="rounded-list mt-2">{renderedKeyFeatures}</ol>
          <img
            class="img-main shadow mb-5"
            alt="img"
            src={project.front_image}
          ></img>
        </div>
      </div>
      <ProjectFeatureList
        proj_pk={project.id}
        setKeyFeatures={setKeyFeatures}
      />
      <CodeSampleList proj_pk={project.id} />
    </>
  );
};

export default ProjectDetail;
