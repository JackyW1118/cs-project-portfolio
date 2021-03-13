import React, { useEffect, useState } from "react";
import axios from "axios";
import Gist from "./Gist";

const CodeSampleList = ({ proj_pk }) => {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    const getSamples = async () => {
      const { data } = await axios.get(
        `/api/code-sample-list/?proj_pk=${proj_pk}`
      );
      setSamples(data);
    };
    if (proj_pk) getSamples();
  }, [proj_pk]);

  const renderedCodeSampleList = samples.map((sample) => {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <h4>{sample.sample_name}</h4>
        </div>
        <div className="row justify-content-center">
          <p className="p">{sample.sample_text}</p>
        </div>
        <div className="row">
          <div className="col-sm" id={sample.id}>
            <Gist id={sample.github_gist_id} />
          </div>
          <div className="col-sm">
            <img
              className="img-fluid shadow p-1 mb-5 bg-white"
              src={sample.feature_image}
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
        <h2 className="my-3">Code Samples</h2>
      </div>
      <div className="row" style={{ width: "80%", margin: "auto" }}>
        <hr />
        <div className="col">{renderedCodeSampleList}</div>
      </div>
    </div>
  );
};

export default CodeSampleList;
