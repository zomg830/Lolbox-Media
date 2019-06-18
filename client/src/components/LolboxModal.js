import React, { Component } from "react";
import {
  Grid,
  Image,
  Modal,
  TransitionablePortal,
  Segment
} from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../actions";

class LolboxModal extends Component {
  state = { open: false };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => {
    this.setState({ open: false });
    this.props.clearComments();
  };

  onSubmit = async formProps => {
    this.props.postComment(
      this.props.userId,
      this.props.id,
      this.props.username,
      formProps.comment
    );
  };

  renderTextArea = ({
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

  renderForm = () => {
    const { handleSubmit, submitting, title } = this.props;

    return (
      <div>
        <p>{title}</p>
        <Segment fluid="true" style={{ overflow: "auto", maxHeight: 100 }}>
          {this.props.comments
            ? this.renderComments(this.props.id)
            : "Be the first to add a comment!"}
        </Segment>
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="field">
            <Field name="comment" type="text" component={this.renderTextArea} />
          </div>
          <button className="ui button" type="submit" disabled={submitting}>
            <i className="comment icon" disabled={submitting} />
          </button>
        </form>
      </div>
    );
  };

  renderComments = id => {
    const comments = this.props.comments.map(el => (
      <div className="item" key={`${el.userId}/${id}/${el.comment_id}`}>
        <div className="header">{el.username}</div>
        {el.comment}
      </div>
    ));
    return <div className="ui celled list">{comments}</div>;
  };

  render() {
    const { trigger, url } = this.props;
    const { open } = this.state;

    return (
      <div>
        <div onClick={this.handleOpen}>{trigger}</div>
        <TransitionablePortal open={open}>
          <Modal
            open={true}
            onClose={() => this.handleClose()}
            dimmer="inverted"
          >
            <Modal.Header>Comments</Modal.Header>
            <Modal.Content image>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={10} verticalAlign="middle">
                    <Image fluid src={url} />
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Modal.Description>{this.renderForm()}</Modal.Description>
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

const mapStateToProps = state => {
  return { comments: state.comment.commentArr, username: state.auth.username };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "comment", initialValues: { comment: "" } })
)(LolboxModal);
