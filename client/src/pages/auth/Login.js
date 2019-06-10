import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import history from "../../history";
import * as actions from "../../actions";

const required = value => (value ? undefined : "Required");
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

const Login = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    errorMessage,
    setId,
    login
  } = props;

  const onSubmit = async formProps => {
    await login(formProps);
    await setId(localStorage.token);
    history.push("/lolbox");
  };

  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          validate={email}
        />
      </div>
      <div className="field">
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          validate={required}
        />
      </div>
      <div className={errorMessage ? "ui message" : null}>{errorMessage}</div>
      <button className="ui button" type="submit" disabled={submitting}>
        Login
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
  reduxForm({ form: "login" })
)(Login);
