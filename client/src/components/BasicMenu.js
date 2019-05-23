import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import GoogleAuth from "./GoogleAuth";
import history from "../history";

export default class BasicMenu extends Component {
  state = { activeItem: "" };

  componentWillMount() {
    let activePath = history.location.pathname;
    let activeItem = activePath === "/" ? "lolbox" : "mybox";
    this.setState({ activeItem });
  }

  handleItemClick = (e, { name }) => {
    let route = name === "lolbox" ? "/" : "/mybox";
    this.setState({ activeItem: name });
    history.push(route);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        <Menu.Item
          name="lolbox"
          active={activeItem === "lolbox"}
          onClick={this.handleItemClick}
        >
          Lolbox Media Search
        </Menu.Item>

        <Menu.Item
          name="mybox"
          active={activeItem === "mybox"}
          onClick={this.handleItemClick}
        >
          My Box
        </Menu.Item>
        <Menu.Menu position="right">
          <GoogleAuth />
        </Menu.Menu>
      </Menu>
    );
  }
}
