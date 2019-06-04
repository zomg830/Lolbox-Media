import React from "react";
import { connect } from "react-redux";

import { fetchLolbox, deleteLolboxItem } from "../actions";

class LolboxCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };

    this.itemRef = React.createRef();
  }

  handleItemLoaded() {
    this.setState({ visible: true });
  }

  handleDelete = id => {
    this.setState({ visible: false });
    this.props.deleteLolboxItem(id);
  };

  render() {
    const item = this.props.item;

    const displayUrl = item.urls ? item.urls.regular : item.url;
    const displayAlt = item.description ? item.description : item.title;

    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}`, position: "relative" }}
        className={this.state.visible ? "fadeIn" : "fadeOut"}
      >
        <img
          ref={this.itemRef}
          alt={displayAlt}
          src={displayUrl}
          onLoad={this.handleItemLoaded.bind(this)}
        />
        <i
          className="ui large inverted times circle outline icon delete-icon"
          onClick={() => {
            this.handleDelete(this.props.item._id);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId, lolbox: state.lolbox };
};

export default connect(
  mapStateToProps,
  { fetchLolbox, deleteLolboxItem }
)(LolboxCard);
