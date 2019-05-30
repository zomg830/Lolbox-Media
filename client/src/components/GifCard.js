import React from "react";
import { connect } from "react-redux";

import { saveLolboxItem } from "../actions";

class GifCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, animated: false };

    this.gifRef = React.createRef();
  }

  componentDidMount() {
    this.gifRef.current.addEventListener("load", this.setSpans);
  }

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
    this.props.saveLolboxItem({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url
    });
  };

  setSpans = () => {
    const height = this.gifRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  render() {
    const gif = this.props.gif;

    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}`, position: "relative" }}
      >
        <img
          ref={this.gifRef}
          alt={gif.title}
          src={gif.images.fixed_width_still.url}
          data-status="0"
          data-animate={gif.images.fixed_width.url}
          data-still={gif.images.fixed_width_still.url}
          onClick={this.handleClick}
        />
        <i
          className="ui inverted save outline large icon"
          style={{
            position: "absolute",
            top: "2%",
            right: "0%",
            width: "1.2em",
            backgroundColor: "rgba(165, 55, 253, 1)",
            borderRadius: "4px",
            cursor: "pointer"
          }}
          onClick={() => {
            this.handleSave(this.props.gif);
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { saveLolboxItem }
)(GifCard);
