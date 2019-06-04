import React from "react";
import { Popup } from "semantic-ui-react";

class VidCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };

    this.vidRef = React.createRef();
  }

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  handleItemLoaded() {
    this.setState({ visible: true });
  }

  renderVid({ vid }) {
    return (
      <Popup
        trigger={
          <img
            ref={this.vidRef}
            alt={vid.snippet.description}
            src={vid.snippet.thumbnails.high.url}
            onLoad={this.handleItemLoaded.bind(this)}
            onClick={() => this.props.onVideoSelect(vid)}
          />
        }
        content={this.decodeHtml(vid.snippet.channelTitle.trim())}
        header={this.decodeHtml(vid.snippet.title.trim())}
      />
    );
  }

  render() {
    return (
      <div style={{ display: this.state.visible ? "" : "none" }}>
        {this.renderVid(this.props)}
      </div>
    );
  }
}

export default VidCard;
