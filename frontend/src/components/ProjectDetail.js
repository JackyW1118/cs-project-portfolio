import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    const getProject = async () => {
      const { data } = await axios.get(
        `api/project-list/?slug=${match.params.slug}`
      );
      setProject(data[0]);
      console.log(data);
    };
    getProject();
  }, []);

  return <div className="row">{project.title}</div>;
};

export default ProjectDetail;
