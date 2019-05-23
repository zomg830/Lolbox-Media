import React from "react";

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

  setSpans = () => {
    const height = this.gifRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  render() {
    const gif = this.props.gif;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.gifRef}
          alt={gif.title}
          src={gif.images.fixed_width_still.url}
          data-status="0"
          data-animate={gif.images.fixed_width.url}
          data-still={gif.images.fixed_width_still.url}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default GifCard;
