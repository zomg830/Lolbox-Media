import React from "react";
import { connect } from "react-redux";

import { saveLolboxItem } from "../actions";

class GifCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: false,
      previouslySaved: false,
      loadingState: "ui active centered inline loader"
    };

    this.itemRef = React.createRef();
  }

  handleItemLoaded() {
    this.setState({ loadingState: null });
  }

  handleClick = () => {
    if (this.state.animated === false) {
      this.itemRef.current.src = this.itemRef.current.dataset.animate;
      this.setState({ animated: true });
    } else {
      this.itemRef.current.src = this.itemRef.current.dataset.still;
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

  renderImg({ gif }) {
    return (
      <div
        className={this.state.loadingState}
        style={{
          position: "relative"
        }}
      >
        <img
          ref={this.itemRef}
          alt={gif.title}
          src={gif.images.fixed_width_still.url}
          data-status="0"
          data-animate={gif.images.fixed_width.url}
          data-still={gif.images.fixed_width_still.url}
          onClick={this.handleClick}
          onLoad={this.handleItemLoaded.bind(this)}
          className="gif"
        />
        {!this.state.loadingState ? this.renderSaveButton() : null}
      </div>
    );
  }

  render() {
    return <div>{this.renderImg(this.props)}</div>;
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId };
};

export default connect(
  mapStateToProps,
  { saveLolboxItem }
)(GifCard);
