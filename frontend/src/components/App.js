import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import ScrollToTopBtn from "./ScrollTopBtn";
import Footer from "./Footer";
import NotFound from "./404NotFound";
import NavBar from "./NavBar";
import ProjectDisplay from "./ProjectsDisplay";
import ResumeDisplay from "./ResumeDisplay";
import About from "./About";
import useGET from "../hooks/useGET";

const App = () => {
  const [myInfo, setMyInfo] = useGET({});

  useEffect(() => {
    setMyInfo("/api/myinfo");
  }, []);

  return (
    <React.Fragment>
      <NavBar myInfo={myInfo} />
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Home myInfo={myInfo} />} />
            <Route path="/projects" exact component={ProjectDisplay} />
            <Route path="/projects/:slug" exact component={ProjectDetail} />
            <Route path="/resume" exact component={ResumeDisplay} />
            <Route path="/about" exact component={About} />
            <Route path="/404" exact component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
        <ScrollToTopBtn />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
