import React from "react";
import { connect } from "react-redux";

import { fetchLolbox, deleteLolboxItem } from "../actions";
import LolboxModal from "./LolboxModal";

class LolboxCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingState: "ui active centered inline loader",
      visible: false,
      commentClass: "big comment outline icon comment-icon"
    };

    this.itemRef = React.createRef();
  }

  handleItemLoaded() {
    this.setState({ loadingState: null });
  }

  handleDelete = (userId, id) => {
    this.setState({ visible: false });
    this.props.deleteLolboxItem(userId, id);
  };

  renderDeleteButton() {
    return (
      <i
        className="ui large inverted times circle outline icon delete-icon"
        onClick={() => {
          this.handleDelete(this.props.item.userId, this.props.item.id);
        }}
      />
    );
  }

  renderCommentButton() {
    return (
      <i
        className={this.state.commentClass}
        onMouseEnter={() =>
          this.setState({
            commentClass:
              "big violet inverted comment outline icon comment-icon"
          })
        }
        onMouseLeave={() =>
          this.setState({
            commentClass: "big comment outline icon comment-icon"
          })
        }
        onClick={() => {
          this.setState({
            commentClass: "big violet comment icon comment-icon"
          });
        }}
      />
    );
  }

  renderModal(title, url) {
    console.log(title, url);
    return (
      <LolboxModal
        trigger={this.renderCommentButton()}
        title={title}
        url={url}
      />
    );
  }

  renderImg() {
    const item = this.props.item;

    const displayUrl = item.urls ? item.urls.regular : item.url;
    const displayAlt = item.description ? item.description : item.title;

    return (
      <div style={{ position: "relative" }} className={this.state.loadingState}>
        <img
          style={{ display: this.state.loadingState ? "none" : null }}
          ref={this.itemRef}
          alt={displayAlt}
          src={displayUrl}
          onLoad={() => this.handleItemLoaded()}
        />
        {!this.state.loadingState ? this.renderDeleteButton() : null}
        {!this.state.loadingState
          ? this.renderModal(displayAlt, displayUrl)
          : null}
      </div>
    );
  }

  render() {
    return <div>{this.renderImg()}</div>;
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId, lolbox: state.lolbox };
};

export default connect(
  mapStateToProps,
  { fetchLolbox, deleteLolboxItem }
)(LolboxCard);
