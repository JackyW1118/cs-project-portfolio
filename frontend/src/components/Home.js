import React, { useEffect, useState } from "react";
import Card from "./Card";
import ProjectList from "./ProjectList";
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
    <div style={{ backgroundColor: "#343a40" }} className="row">
      <div className="col mb-5">
        <div className="row">
          <MyInfo myInfo={myInfo} />
        </div>
        <div className="row justify-content-center">
          <div class="col-md-10">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
