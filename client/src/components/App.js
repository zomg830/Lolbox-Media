import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Tabs from "./Tabs";
import MyBox from "../pages/MyBox";
import BasicMenu from "./BasicMenu";
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
