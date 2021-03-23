import React, { useEffect, useState } from "react";
import ProjectCardList from "./ProjectCardList";
import axios from "axios";

const ProjectDisplay = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getObj("/api/project-list/", setProjects);
  }, []);

  const getObj = async (url, setter) => {
    const { data } = await axios.get(url);
    setter(data);
  };

  return (
    <div className="row my-3">
      <div className="col-md-10 my-3 mx-auto">
        <h2 className="text-white">All Projects</h2>
      </div>
      <div className="col-md-10 mx-auto">
        <ProjectCardList projects={projects} showAll={true} />
      </div>
    </div>
  );
};

export default ProjectDisplay;
