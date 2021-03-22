import React, { useEffect, useState } from "react";
import ProjectCardList from "./ProjectCardList";
import MyInfo from "./MyInfo";
import axios from "axios";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [myInfo, setMyInfo] = useState({ tech_stack: "" });

  useEffect(() => {
    getObj("/api/myinfo", setMyInfo);
    getObj("/api/project-list/", setProjects);
  }, []);

  const getObj = async (url, setter) => {
    const { data } = await axios.get(url);
    setter(data);
  };

  return (
    <div className="row">
      <img
        src="https://cs-portfolio-wang.s3-us-west-1.amazonaws.com/profile/O9FG5Q0.jpg"
        id="bg"
        className="bg-home"
        alt="bg"
      ></img>
      <div className="col mb-5">
        <div className="row">
          <MyInfo myInfo={myInfo} />
        </div>
        <div className="row justify-content-center mt-5">
          <div class="col-md-10 mb-3">
            <div className="d-flex flex-row justify-content-center">
              <h2 className="text-light text-center mr-2">Sample Projects</h2>
              <div>
                <a className="btn btn-primary" href="/projects">
                  View All
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-10">
            <ProjectCardList projects={projects} showAll={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
