import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Vendor from "./Pages/Vendor/Vendor";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vendor" component={Vendor} />
      </Switch>
    </Router>
  );
};

export default Routes;
