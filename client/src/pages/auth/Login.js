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

  renderForm() {
    const { handleSubmit } = this.props;

    return (
      <div className="ui container">
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="field">
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </div>
          <div className={this.props.errorMessage ? "ui message" : null}>
            {this.props.errorMessage}
          </div>
          <button className="ui button" type="submit">
            Log In!
          </button>
        </form>
      </div>
    );
  }

  render() {
    return this.renderForm();
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
