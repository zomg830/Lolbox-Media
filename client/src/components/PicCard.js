import React from "react";

class PicCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, loadedClass: "ui loader" };

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
    console.log("image loaded");
    this.setState({ loadedClass: null });
  };

  render() {
    const pic = this.props.pic;
    console.log(this.picRef);
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div className={this.state.loadedClass}>
          <img
            ref={this.picRef}
            onLoad={this.handleImageLoaded}
            alt={pic.description}
            src={pic.urls.regular}
          />
        </div>
      </div>
    );
  }
}

export default PicCard;
