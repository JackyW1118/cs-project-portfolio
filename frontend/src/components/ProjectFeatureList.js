import React, { useEffect, useState } from "react";
import useGET from "../hooks/useGET";

const ProjectFeatureList = ({ proj_pk, setKeyFeatures }) => {
  const [features, setFeatures] = useGET([]);

  //when proj_pk is passed to this component call setFeatures to update state
  useEffect(() => {
    if (proj_pk) {
      setFeatures(`/api/project-feature-list/?proj_pk=${proj_pk}`);
    }
  }, [proj_pk]);

  /*
  when the features state is updated with data, run the callback to 
  pass features back to ProjectDetail to display the feature links
  */
  useEffect(() => {
    if (features.length != 0) {
      setKeyFeatures(features);
    }
  }, [features]);

  const renderedProjectFeatureList = features.map((feature) => {
    return (
      <>
        <hr />
        <div className="row justify-content-center" id={feature.feature_title}>
          <p className="text-white h3 my-3">{feature.feature_title}</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className="p text-lead text-white">{feature.feature_detail}</p>
          </div>
          <div className="col-md-8">
            <img
              className="img-fluid shadow p-1 mb-5 bg-white"
              src={feature.feature_image}
              alt="img"
            />
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="container">
      <div className="row mb-2">
        <h3 className="my-3 text-light ml-4">
          <i class="fa fa-list-alt"></i> Features
        </h3>
      </div>
      <div className="row">
        <div className="col">{renderedProjectFeatureList}</div>
      </div>
    </div>
  );
};

export default ProjectFeatureList;
