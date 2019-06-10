import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../actions";

class Auth extends Component {
  async componentDidMount() {
    this.props.setId(this.props.token || localStorage.token);
  }

  renderSignInButton() {
    return this.props.isLoggedIn ? (
      <div>
        <label className="email-display">{this.props.email} </label>
        <button
          className="ui button"
          onClick={() => {
            this.props.signout();
            this.props.destroyId();
          }}
        >
          Sign out
        </button>
      </div>
    ) : (
      <div>
        <Link to="/login" className="ui button">
          Login
        </Link>
        <Link to="/signup" className="ui button">
          Sign up
        </Link>
      </div>
    );
  }

  render() {
    return <div>{this.renderSignInButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.authenticated,
    isLoggedIn: state.auth.isLoggedIn,
    email: state.auth.email
  };
};

export default connect(
  mapStateToProps,
  actions
)(Auth);
