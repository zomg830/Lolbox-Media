import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Landing from "../pages/Landing";
import Tabs from "./Tabs";
import MyBox from "../pages/MyBox";
import BasicMenu from "./BasicMenu";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <BasicMenu fluid={true} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <div className="ui container">
              <Route exact path="/lolbox" component={Tabs} />
              <Route exact path="/mybox" component={MyBox} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
