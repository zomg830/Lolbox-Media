import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Tabs from "./Tabs";
import MyBox from "../pages/MyBox";
import BasicMenu from "./BasicMenu";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <BasicMenu fluid={true} />
          <div className="ui container">
            <Switch>
              <Route exact path="/" component={Tabs} />
              <Route exact path="/mybox" component={MyBox} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
