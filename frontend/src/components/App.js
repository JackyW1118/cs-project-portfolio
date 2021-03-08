import React from "react";
import Home from "./Home";
import ProjectDetail from "./ProjectDetail";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
      <Switch>
        <Route path="/:slug" exact component={ProjectDetail}></Route>
      </Switch>
      <div className="row">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
