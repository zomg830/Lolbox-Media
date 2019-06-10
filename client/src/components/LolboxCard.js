import React from "react";
import { connect } from "react-redux";

import { fetchLolbox, deleteLolboxItem } from "../actions";

class LolboxCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingState: "ui active centered inline loader"
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
          onLoad={this.handleItemLoaded.bind(this)}
        />
        {!this.state.loadingState ? this.renderDeleteButton() : null}
      </div>
    );
  }

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
