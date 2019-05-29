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

  handleClick = ({ id, description, urls, alt_description }) => {
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
        <div className={this.state.loadedClass}>
          <img
            ref={this.picRef}
            onLoad={this.handleImageLoaded}
            onClick={() => this.handleClick(this.props.pic)}
            alt={pic.description}
            src={pic.urls.regular}
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
