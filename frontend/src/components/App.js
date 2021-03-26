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

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={ProjectDisplay} />
            <Route path="/projects/:slug" exact component={ProjectDetail} />
            <Route path="/resume" exact component={ResumeDisplay} />
            <Route path="/about" exact component={About} />
            <Route path="/404" exact component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
        <ScrollToTopBtn />
      </div>
    </React.Fragment>
  );
};

export default App;
