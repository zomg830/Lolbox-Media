import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../actions";
import history from "../../history";

class Login extends Component {
  onSubmit = async formProps => {
    await this.props.login(formProps);
    await this.props.setId(localStorage.token);
    history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
        <div>{this.props.errorMessage}</div>
        <button className="ui button">Log In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "login" })
)(Login);
