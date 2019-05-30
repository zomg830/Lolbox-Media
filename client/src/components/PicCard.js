import React from "react";
import { connect } from "react-redux";

import { saveLolboxItem } from "../actions";

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

  handleSave = ({ id, description, urls, alt_description }) => {
    this.props.saveLolboxItem({
      id,
      description,
      urls,
      alt_description
    });
  };

  render() {
    const pic = this.props.pic;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <div
          className={this.state.loadedClass}
          style={{ position: "relative" }}
        >
          <img
            ref={this.picRef}
            onLoad={this.handleImageLoaded}
            alt={pic.description}
            src={pic.urls.regular}
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
              this.handleSave(this.props.pic);
            }}
          />
        </div>
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
)(PicCard);
