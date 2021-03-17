import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import Hero from "./Hero";
import ProjectFeatureList from "./ProjectFeatureList";
import CodeSampleList from "./CodeSampleList";
import ReturnHomeBtn from "./ReturnHomeBtn";

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

  //make a get requet to retrieve the project with slug that is the path of current url
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
      <li className="mb-2">
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
            <span className="badge badge-pill badge-primary mr-2 mb-1">
              {tech}
            </span>
          );
        });

  //if state project is empty object redirect to 404 page
  return Object.keys(project).length === 0 ? (
    <Redirect to="/404" />
  ) : (
    <React.Fragment>
      <ReturnHomeBtn />
      <div className="row">
        <Hero project={project.title} />
      </div>
      <div
        className="row justify-content-center detail-row"
        style={{ width: "90%", margin: "auto" }}
      >
        <div className="col-md">
          <div className="row">
            <div className="col-md">
              <h5>Details: </h5>
              {project.description}
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md">
              <h5>Feature Links: </h5>
              <ol className="rounded-list">{renderedKeyFeatures}</ol>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md">
              <h5>Technology Used: </h5>
              <div
                class="d-flex flex-wrap justify-content-center"
                style={{ width: "70%", margin: "auto" }}
              >
                {renderedTechs}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="row">
            <div className="col-md">
              <img
                className="img-main shadow p-3 mb-5 bg-white rounded"
                src={project.front_image}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row detail-row">
        <div className="h5 col-md mb-5">
          <a
            href={project.project_link}
            className="btn btn-primary mr-3"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.github_url}
            className="btn"
            style={{ color: "white", backgroundColor: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github mr-2" />
            Github Code
          </a>
        </div>
      </div>
      <div className="row detail-row">
        <div className="col" style={{ padding: "0" }}>
          {project.feature_list_visible ? (
            <ProjectFeatureList
              proj_pk={project.id}
              setKeyFeatures={setKeyFeatures}
            />
          ) : null}
        </div>
      </div>
      <div className="row detail-row">
        <div className="col" style={{ padding: "0" }}>
          {project.code_sample_visible ? (
            <CodeSampleList proj_pk={project.id} />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetail;
