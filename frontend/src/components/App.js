import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import ScrollToTopBtn from "./ScrollTopBtn";
import Footer from "./Footer";
import NotFound from "./404NotFound";
import NavBar from "./NavBar";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project/:slug" exact component={ProjectDetail} />
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
