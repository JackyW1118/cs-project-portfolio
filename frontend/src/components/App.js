import React from "react";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import ScrollToTopBtn from "./ScrollTopBtn";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
        <Switch>
          <Route path="/:slug" exact component={ProjectDetail}></Route>
        </Switch>
        <Footer />
      </Router>
      <ScrollToTopBtn />
    </React.Fragment>
  );
};

export default App;
