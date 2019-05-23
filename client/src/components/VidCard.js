import React from "react";
import { Popup } from "semantic-ui-react";

class VidCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.vidRef = React.createRef();
  }

  componentDidMount() {
    this.vidRef.current.addEventListener("load", this.setSpans);
  }

  decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  setSpans = () => {
    const height = this.vidRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  render() {
    const vid = this.props.vid;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Popup
          trigger={
            <div className="ui fluid container">
              <img
                ref={this.vidRef}
                alt={vid.snippet.description}
                src={vid.snippet.thumbnails.high.url}
                onClick={() => this.props.onVideoSelect(vid)}
              />
            </div>
          }
          content={this.decodeHtml(vid.snippet.channelTitle.trim())}
          header={this.decodeHtml(vid.snippet.title.trim())}
        />
      </div>
    );
  }
}

export default VidCard;
