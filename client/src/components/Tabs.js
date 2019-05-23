import React from "react";
import { Tab } from "semantic-ui-react";

import Giphy from "../pages/Giphy";
import Unsplash from "../pages/Unsplash";
import YouTube from "../pages/YouTube";

const panes = [
  {
    menuItem: "Giphy",
    render: () => (
      <Tab.Pane>
        <Giphy />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Unsplash",
    render: () => (
      <Tab.Pane>
        <Unsplash />
      </Tab.Pane>
    )
  },
  {
    menuItem: "YouTube",
    render: () => (
      <Tab.Pane>
        <YouTube />
      </Tab.Pane>
    )
  }
];

const Tabs = () => <Tab panes={panes} />;

export default Tabs;
