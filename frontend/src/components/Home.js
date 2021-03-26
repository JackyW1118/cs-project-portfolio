import React, { useEffect } from "react";
import ProjectCardList from "./ProjectCardList";
import MyInfo from "./MyInfo";
import useGET from "../hooks/useGET";

const Home = () => {
  const [projects, setProjects] = useGET([]);
  const [myInfo, setMyInfo] = useGET({ tech_stack: "" });

  useEffect(() => {
    //set the above two state
    setMyInfo("/api/myinfo");
    setProjects("/api/project-list/");
  }, []);

  return (
    <div className="row home-row">
      <div className="home-bg-top" />
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
