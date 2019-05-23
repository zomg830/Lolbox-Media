import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const BannerSegment = props => (
  <Segment placeholder inverted color="violet">
    <Header icon>
      <Icon name="search" />
      Enter some tags to search for {props.type}s!
    </Header>
  </Segment>
);

export default BannerSegment;
