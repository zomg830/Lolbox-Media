import React, { Component } from "react";

import giphy from "../api/giphy";
import SearchBar from "../components/SearchBar";
import GifList from "../components/GifList";
import BannerSegment from "../components/BannerSegment";

export default class Giphy extends Component {
  state = { gifs: [], showResults: false };

  onSearchSubmit = async term => {
    const response = await giphy
      .get("/v1/gifs/search", {
        params: { q: term, api_key: process.env.GIPHY_KEY }
      })
      .catch(err => console.log(err));
    this.setState({ gifs: response.data.data, showResults: true });
  };

  render() {
    return (
      <div>
        <BannerSegment type="GIF" />
        <SearchBar onSubmit={this.onSearchSubmit} type="GIF" />
        {this.state.showResults ? <GifList gifs={this.state.gifs} /> : null}
      </div>
    );
  }
}
