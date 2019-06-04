import React from "react";
import { Popup } from "semantic-ui-react";

class VidCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loadingState: "ui active centered inline loader" };

    this.vidRef = React.createRef();
  }

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  handleItemLoaded() {
    this.setState({
      loadingState: null
    });
  }

  renderVid({ vid }) {
    return (
      <Popup
        trigger={
          <div className={this.state.loadingState}>
            <img
              className="vid-thumbnail"
              style={{ display: this.state.loadingState ? "none" : null }}
              ref={this.vidRef}
              alt={vid.snippet.description}
              src={vid.snippet.thumbnails.high.url}
              onLoad={this.handleItemLoaded.bind(this)}
              onClick={() => this.props.onVideoSelect(vid)}
            />
          </div>
        }
        content={this.decodeHtml(vid.snippet.channelTitle.trim())}
        header={this.decodeHtml(vid.snippet.title.trim())}
      />
    );
  }

  render() {
    return <div>{this.renderVid(this.props)}</div>;
  }
}

export default VidCard;
