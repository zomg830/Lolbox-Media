import React, { Component } from "react";
import _ from "lodash";

import giphy from "../api/giphy";
import SearchBar from "../components/SearchBar";
import GifList from "../components/GifList";
import BannerSegment from "../components/BannerSegment";

const KEY = process.env.REACT_APP_GIPHY;

export default class Giphy extends Component {
  state = { gifs: [], showResults: false, term: null, offset: 0 };

  onSearchSubmit = async term => {
    let offset = this.state.term === term ? this.state.offset : 0;
    const response = await giphy
      .get("/v1/gifs/search", {
        params: {
          q: term,
          api_key: KEY,
          offset: offset
        }
      })
      .catch(err => console.log(err));
    const gifItems = _.uniqBy(
      this.state.term === term
        ? [...this.state.gifs, ...response.data.data]
        : response.data.data,
      "id"
    );

    offset = this.state.offset + 25;
    this.setState({
      gifs: gifItems,
      showResults: true,
      term: term,
      offset: offset
    });
  };

  renderShowMoreButton() {
    return this.state.gifs.length !== 0 ? (
      <button
        className="ui gray button"
        style={{ display: "flex", margin: "auto" }}
        onClick={() =>
          this.onSearchSubmit(this.state.term, this.state.offsetPage)
        }
      >
        Show More
      </button>
    ) : null;
  }

  render() {
    return (
      <div>
        <BannerSegment type="GIF" />
        <SearchBar onSubmit={this.onSearchSubmit} type="GIF" />
        {this.state.showResults ? (
          <div>
            <GifList gifs={this.state.gifs} />
            {this.renderShowMoreButton()}
          </div>
        ) : null}
      </div>
    );
  }
}
