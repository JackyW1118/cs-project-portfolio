import React, { useEffect, useState } from "react";
import Card from "./Card";
import ProjectList from "./ProjectList";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get("api/project-list/");
      setProjects(data);
    };
    getProjects();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <Nav />
      </div>
      <div className="row">
        <div class="col-md-3 mb-3 float-up">
          <Card />
        </div>
        <div class="col-sm">
          <ProjectList projects={projects} />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
