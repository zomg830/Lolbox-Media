import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import history from "../../history";
import * as actions from "../../actions";

class Signup extends Component {
  onSubmit = async formProps => {
    console.log(formProps);
    await this.props.signup(formProps);
    await this.props.setId(localStorage.token);
    history.push("/lolbox");
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
            Sign Up!
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
  reduxForm({ form: "signup" })
)(Signup);
