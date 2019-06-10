import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

import Auth from "./Auth";
import history from "../history";

export default class BasicMenu extends Component {
  state = { activeItem: "" };

  async componentDidMount() {
    await this.setState({ activeItem: history.location.pathname });
  }

  handleItemClick = (e, { name }) => {
    let route = name;
    this.setState({ activeItem: name });
    history.push(route);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu text secondary size="large">
          <Menu.Item
            name="lolbox"
            active={activeItem.includes("lolbox")}
            onClick={this.handleItemClick}
          >
            Lolbox Media Search
          </Menu.Item>

          <Menu.Item
            name="mybox"
            active={activeItem.includes("mybox")}
            onClick={this.handleItemClick}
          >
            My Box
          </Menu.Item>
          <Menu.Menu position="right">
            <Auth />
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
