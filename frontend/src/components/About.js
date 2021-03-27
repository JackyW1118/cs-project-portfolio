import React from "react";
import ReactHtmlParser from "react-html-parser";

const About = ({ myInfo }) => {
  return (
    <>
      <div className="other-bg" />
      <div className="d-flex flex-column container about-height">
        <h2 className="text-center text-white mb-3 mt-5">About Me</h2>
        <div className="lead text-white">
          {ReactHtmlParser(myInfo.about_page_description)}
        </div>
        <div className="d-flex flex-row w-60 text-white justify-content-center">
          <a
            title={myInfo.email}
            data-toggle="tooltip"
            data-placement="bottom"
            className="text-white"
            href={`mailto:${myInfo.email}`}
          >
            <i class="fas fa-envelope-square"></i> Email
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
