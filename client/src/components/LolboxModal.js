import React, { Component } from "react";
import { Grid, Image, Modal, TransitionablePortal } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions";

const renderTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class LolboxModal extends Component {
  state = { open: false };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  onSubmit = async formProps => {
    formProps.userId = this.props.userId;
    formProps.id = this.props.id;
    console.log(formProps);
  };

  render() {
    const {
      handleSubmit,
      submitting,
      trigger,
      displayAlt,
      displayUrl
    } = this.props;
    const { open } = this.state;
    console.log(this.props);

    return (
      <div>
        <div onClick={this.handleOpen}>{trigger}</div>
        <TransitionablePortal open={open}>
          <Modal
            open={true}
            onClose={() => this.handleClose()}
            dimmer="inverted"
          >
            <Modal.Header>Comment</Modal.Header>
            <Modal.Content image>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image fluid src={displayUrl} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Modal.Description>
                      <p>{displayAlt}</p>
                      <form
                        className="ui form"
                        onSubmit={handleSubmit(this.onSubmit)}
                      >
                        <div className="field">
                          <Field
                            name="comment"
                            type="text"
                            component={renderTextArea}
                          />
                        </div>
                        <button
                          className="ui button"
                          type="submit"
                          disabled={submitting}
                        >
                          <i className="comment icon" disabled={submitting} />
                        </button>
                      </form>
                    </Modal.Description>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal>
        </TransitionablePortal>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: "comment", initialValues: { comment: "" } })
)(LolboxModal);
