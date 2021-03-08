import React, { useEffect, useState } from "react";
import Card from "./Card";
import ProjectList from "./ProjectList";
import Hero from "./Hero";
import axios from "axios";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get("/api/project-list/");
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <Hero />
      </div>
      <div className="row">
        <div class="col-md-3 mb-3 float-up">
          <Card />
        </div>
        <div class="col-sm">
          <ProjectList projects={projects} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
