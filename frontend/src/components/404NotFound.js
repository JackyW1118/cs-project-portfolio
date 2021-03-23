import React from "react";

const NotFound = () => {
  return (
    <div className="row align-items-center not-found">
      <div className="col-md-12 text-center text-white">
        <h2>404 Page Not Found</h2>
        <a className="btn btn-primary mt-2" href="/" role="button">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
