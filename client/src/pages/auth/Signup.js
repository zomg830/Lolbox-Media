import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import history from "../../history";
import * as actions from "../../actions";

const required = value => (value ? undefined : "Required");
const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;
const minLength8 = minLength(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const Signup = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    errorMessage,
    setId,
    signup
  } = props;

  const onSubmit = async formProps => {
    await signup(formProps);
    await setId(localStorage.token);
    history.push("/lolbox");
  };

  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          validate={required}
        />
      </div>
      <div className="field">
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          validate={[required, email]}
        />
      </div>
      <div className="field">
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          validate={[required, minLength8]}
          warn={minLength8}
        />
      </div>
      {errorMessage === "Invalid login credentials" ? null : (
        <div className={errorMessage ? "ui message" : null}>{errorMessage}</div>
      )}
      <button className="ui button" type="submit" disabled={submitting}>
        Sign Up
      </button>
      <button
        className="ui button"
        type="button"
        disabled={pristine || submitting}
        onClick={reset}
      >
        Clear Values
      </button>
    </form>
  );
};

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
