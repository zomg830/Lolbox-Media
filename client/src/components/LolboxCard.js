import React from "react";
import { connect } from "react-redux";
import { fetchLolbox, deleteLolboxItem } from "../actions";

import "./GifList.css";

class LolboxCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, visible: false };

    this.itemRef = React.createRef();
  }

  componentDidMount() {
    this.itemRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.itemRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans, visible: true });
  };

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
        <img ref={this.itemRef} alt={displayAlt} src={displayUrl} />
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
