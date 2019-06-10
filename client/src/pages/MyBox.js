import React, { Component } from "react";
import { connect } from "react-redux";
import { Message } from "semantic-ui-react";

import { fetchLolbox } from "../actions";
import LolboxList from "../components/LolboxList";

class MyBox extends Component {
  async componentDidMount() {
    if (this.props.userId) await this.props.fetchLolbox(this.props.userId);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      await this.props.fetchLolbox(this.props.userId);
    }
  }

  renderPlaceholder() {
    if (!this.props.userId)
      return (
        <Message
          warning
          header="You must register before you can do that."
          content="Please Login or sign up to start creating a box!"
        />
      );
    return <div />;
  }

  render() {
    return !this.props.lolbox.userArr ? (
      this.renderPlaceholder()
    ) : (
      <LolboxList lolbox={this.props.lolbox.userArr} />
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId, lolbox: state.lolbox };
};

export default connect(
  mapStateToProps,
  { fetchLolbox }
)(MyBox);
