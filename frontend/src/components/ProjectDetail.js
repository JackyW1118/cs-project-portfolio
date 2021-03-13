import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import ProjectFeatureList from "./ProjectFeatureList";
import CodeSampleList from "./CodeSampleList";
import ReturnHomeBtn from "./ReturnHomeBtn";

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState({
    key_features: "",
    technical_details: "",
  });

  const [keyFeatures, setKeyFeatures] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      const { data } = await axios.get(
        `/api/project-list/?slug=${match.params.slug}`
      );
      setProject(data[0]);
    };
    getProject();
  }, []);

  const renderedKeyFeatures = keyFeatures.map(({ feature_title }, index) => {
    return (
      <a
        href={`#${feature_title}`}
        class="btn badge badge-pill badge-primary mb-2 py-0"
      >
        <h6 className="py-0 my-1">
          <a class="badge badge-pill badge-info mr-1 py-1 my-1">{++index}</a>
          {feature_title}
        </h6>
      </a>
    );
  });

  const renderedTechs = project.technical_details.split("/").map((tech) => {
    return (
      <span className="badge badge-pill badge-primary mr-2 mb-1">{tech}</span>
    );
  });

  return (
    <React.Fragment>
      <ReturnHomeBtn />
      <div className="row">
        <Hero project={project.title} />
      </div>
      <div
        className="row justify-content-center detail-row"
        style={{ width: "90%", margin: "auto" }}
      >
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <h5>Details: </h5>
              {project.description}
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm">
              <h5>Feature Links: </h5>
              <div
                class="d-flex flex-column"
                style={{ width: "min-content", margin: "auto" }}
              >
                {renderedKeyFeatures}
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm">
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
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
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
        <div className="h5 col-sm mb-5">
          <a
            href={project.project_link}
            className="btn btn-primary mr-3"
            style={{ color: "white" }}
          >
            Live Demo
          </a>
          <a
            href={project.github_url}
            className="btn"
            style={{ color: "white", backgroundColor: "black" }}
          >
            <i className="fa fa-github mr-2" />
            Github Code
          </a>
        </div>
      </div>
      <div className="row detail-row">
        <div className="col" style={{ padding: "0" }}>
          <ProjectFeatureList
            proj_pk={project.id}
            setKeyFeatures={setKeyFeatures}
          />
        </div>
      </div>
      <div className="row detail-row">
        <div className="col" style={{ padding: "0" }}>
          <CodeSampleList proj_pk={project.id} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetail;
