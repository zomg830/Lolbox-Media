import React from "react";
import { connect } from "react-redux";

import { saveLolboxItem } from "../actions";

class GifCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,
      animated: false,
      previouslySaved: false,
      visible: false
    };

    this.gifRef = React.createRef();
  }

  componentDidMount() {
    this.gifRef.current.addEventListener("load", this.setSpans);
  }

  handleImageLoaded = () => {
    this.setState({ visible: true });
  };

  handleClick = () => {
    if (this.state.animated === false) {
      this.gifRef.current.src = this.gifRef.current.dataset.animate;
      this.setState({ animated: true });
    } else {
      this.gifRef.current.src = this.gifRef.current.dataset.still;
      this.setState({ animated: false });
    }
  };

  handleSave = gif => {
    if (!this.state.previouslySaved) {
      this.props.saveLolboxItem({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
      });
      this.setState({ previouslySaved: true });
    }
  };

  setSpans = () => {
    const height = this.gifRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  renderSaveButton = () => {
    return !this.state.previouslySaved && this.props.userId ? (
      <i
        className="ui inverted save outline large icon save-icon"
        onClick={() => {
          this.handleSave(this.props.gif);
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

  render() {
    const gif = this.props.gif;

    return (
      <div
        style={{
          gridRowEnd: `span ${this.state.spans}`,
          position: "relative"
        }}
      >
        <img
          ref={this.gifRef}
          alt={gif.title}
          src={gif.images.fixed_width_still.url}
          onLoad={this.handleImageLoaded}
          data-status="0"
          data-animate={gif.images.fixed_width.url}
          data-still={gif.images.fixed_width_still.url}
          onClick={this.handleClick}
          className="gif"
        />
        {this.renderSaveButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId, lolbox: state.lolbox };
};

export default connect(
  mapStateToProps,
  { saveLolboxItem }
)(GifCard);
