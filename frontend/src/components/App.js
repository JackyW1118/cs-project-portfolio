import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <React.Fragment>
      <div className="row">Nav Bar</div>
      <div className="row">
        <div class="col-sm width-control">
          <Card />
        </div>
        <div class="col-sm">Projs</div>
      </div>
    </React.Fragment>
  );
};

export default App;
