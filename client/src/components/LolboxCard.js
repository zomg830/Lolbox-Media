import React from "react";

class LolboxCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0, animated: false };

    this.itemRef = React.createRef();
  }

  componentDidMount() {
    this.itemRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.itemRef.current.clientHeight;

    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans: spans });
  };

  render() {
    const item = this.props.item;

    const displayUrl = item.urls ? item.urls.regular : item.url;
    const displayAlt = item.description ? item.description : item.title;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.itemRef} alt={displayAlt} src={displayUrl} />
      </div>
    );
  }
}

export default LolboxCard;
