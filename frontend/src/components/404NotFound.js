import React from "react";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="row align-items-center not-found">
        <div className="col-md-12" style={{ textAlign: "center" }}>
          <h2>Page Not Found</h2>
          <a className="btn btn-primary mt-2" href="/" role="button">
            Return Home
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;