import React, { useEffect } from "react";
import Gist from "./Gist";
import useGET from "../hooks/useGET";

const CodeSampleList = ({ proj_pk }) => {
  const [samples, setSamples] = useGET([]);

  useEffect(() => {
    if (proj_pk) setSamples(`/api/code-sample-list/?proj_pk=${proj_pk}`);
  }, [proj_pk]);

  const renderedCodeSampleList = samples.map((sample) => {
    return (
      <>
        <hr />
        <div className="row justify-content-center">
          <p className="text-white h3 my-3">{sample.sample_name}</p>
        </div>
        <div className="row ">
          <div className="col-md text-center">
            <p className="p text-lead text-white">{sample.sample_text}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md" id={sample.id}>
            <Gist id={sample.github_gist_id} />
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid shadow p-1 mb-5 bg-white"
              src={sample.feature_image}
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
          <i class="fa fa-code mr-2"></i>Code Samples
        </h3>
      </div>
      <div className="row">
        <div className="col">{renderedCodeSampleList}</div>
      </div>
    </div>
  );
};

export default CodeSampleList;
