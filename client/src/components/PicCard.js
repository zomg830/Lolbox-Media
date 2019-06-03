import React from "react";
import { connect } from "react-redux";

import "./GifList.css";
import { saveLolboxItem } from "../actions";

class PicCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, visible: false, previouslySaved: false };

    this.picRef = React.createRef();
  }

  componentDidMount() {
    this.picRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.picRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  handleImageLoaded = () => {
    this.setState({ visible: true });
  };

  handleSave = ({ id, description, urls, alt_description }) => {
    if (!this.state.previouslySaved) {
      this.props.saveLolboxItem({
        id,
        description,
        urls,
        alt_description
      });
      this.setState({ previouslySaved: true });
    }
  };

  renderSaveButton = () => {
    return !this.state.previouslySaved && this.props.userId ? (
      <i
        className="ui inverted save outline large icon save-icon"
        onClick={() => {
          this.handleSave(this.props.pic);
        }}
      />
    ) : (
      <i
        className={
          !this.props.userId
            ? ""
            : "ui inverted check square large icon check-icon"
        }
      />
    );
  };

  renderImg({ pic }) {
    return (
      <div
        className={this.state.visible ? "fadeIn" : "fadeOut"}
        style={{ position: "relative" }}
      >
        <img
          ref={this.picRef}
          onLoad={this.handleImageLoaded}
          alt={pic.description}
          src={pic.urls.regular}
        />
        {this.renderSaveButton()}
      </div>
    );
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {this.renderImg(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId };
};

export default connect(
  mapStateToProps,
  { saveLolboxItem }
)(PicCard);
