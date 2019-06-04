import React from "react";
import { connect } from "react-redux";

import { saveLolboxItem } from "../actions";

class PicCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previouslySaved: false,
      loadingState: "ui active centered inline loader"
    };

    this.itemRef = React.createRef();
  }

  handleItemLoaded() {
    this.setState({ loadingState: null });
  }

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
      <div className={this.state.loadingState} style={{ position: "relative" }}>
        <img
          style={{ display: this.state.loadingState ? "none" : null }}
          ref={this.itemRef}
          alt={pic.description}
          src={pic.urls.small}
          onLoad={this.handleItemLoaded.bind(this)}
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
)(PicCard);
