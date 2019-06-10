import React, { Component } from "react";
import { connect } from "react-redux";

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

  render() {
    return !this.props.lolbox.userArr ? (
      <div />
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
