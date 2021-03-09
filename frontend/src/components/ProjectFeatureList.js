import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectFeatureList = ({ proj_pk, setKeyFeatures }) => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const getFeatures = async () => {
      const { data } = await axios.get(
        `/api/project-feature-list/?proj_pk=${proj_pk}`
      );
      setFeatures(data);
      setKeyFeatures(data);
    };
    if (proj_pk) getFeatures();
  }, [proj_pk]);

  const renderedProjectFeatureList = features.map((feature) => {
    return (
      <React.Fragment>
        <div className="row justify-content-center" id={feature.feature_title}>
          <h4>{feature.feature_title}</h4>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="p">{feature.feature_detail}</p>
          </div>
          <div className="col-sm">
            <img
              className="img-fluid shadow p-1 mb-5 bg-white"
              src={feature.feature_image}
              alt="img"
            />
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  });
  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <div className="row justify-content-center feature-hero mb-2">
        <h2 className="my-3">Feature List</h2>
      </div>
      <div className="row" style={{ width: "80%", margin: "auto" }}>
        <hr />
        <div className="col">{renderedProjectFeatureList}</div>
      </div>
    </div>
  );
};

export default ProjectFeatureList;
