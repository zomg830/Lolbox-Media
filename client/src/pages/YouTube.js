import React, { Component } from "react";

import youtube from "../api/youtube";
import SearchBar from "../components/SearchBar";
import VidList from "../components/VidList";
import BannerSegment from "../components/BannerSegment";

export default class Youtube extends Component {
  state = {
    vids: [],
    term: null,
    showResults: false,
    selectedVideo: null,
    pageToken: null
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onSearchSubmit = async (term, pageToken = null) => {
    const response = await youtube
      .get("/search", {
        params: {
          q: term,
          pageToken: pageToken
        }
      })
      .catch(err => console.log(err));
    const vidItems =
      this.state.term === term
        ? [...this.state.vids, ...response.data.items]
        : response.data.items;
    this.setState({
      vids: vidItems,
      term: term,
      showResults: true,
      selectedVideo: response.data.items[0],
      pageToken: response.data.nextPageToken
    });
  };

  render() {
    const videoSrc = !this.state.selectedVideo
      ? null
      : `https://www.youtube.com/embed/${this.state.selectedVideo.id.videoId}`;

    return (
      <div>
        <BannerSegment type="video" />
        <SearchBar onSubmit={this.onSearchSubmit} type="Video" />
        {!this.state.selectedVideo ? null : (
          <div className="ui segment embed">
            <iframe
              title="player"
              src={videoSrc}
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              frameBorder="0"
            />
          </div>
        )}
        {this.state.showResults ? (
          <div>
            <VidList
              vids={this.state.vids}
              onVideoSelect={this.onVideoSelect}
            />{" "}
            <button
              className="ui gray button"
              style={{ display: "flex", margin: "auto" }}
              onClick={() =>
                this.onSearchSubmit(this.state.term, this.state.pageToken)
              }
            >
              Show More
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
