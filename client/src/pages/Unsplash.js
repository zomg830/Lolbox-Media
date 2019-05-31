import React, { Component } from "react";

import unsplash from "../api/unsplash";
import SearchBar from "../components/SearchBar";
import PicList from "../components/PicList";
import BannerSegment from "../components/BannerSegment";

const KEY = process.env.REACT_APP_UNSPLASH;

export default class Unsplash extends Component {
  state = { pics: [], showResults: false, term: null, offsetPage: 0 };

  onSearchSubmit = async (term, page = 1) => {
    const response = await unsplash
      .get("/search/photos", {
        params: {
          query: term,
          page: page,
          per_page: 20,
          client_id: KEY
        }
      })
      .catch(err => console.log(err));
    const picItems =
      this.state.term === term
        ? [...this.state.pics, ...response.data.results]
        : response.data.results;
    this.setState({
      pics: picItems,
      showResults: true,
      term: term,
      offsetPage: page + 1
    });
    console.log(this.state.pics);
  };

  renderShowMoreButton() {
    return this.state.pics.length !== 0 ? (
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
        <BannerSegment type="picture" />
        <SearchBar onSubmit={this.onSearchSubmit} type="Picture" />
        {this.state.showResults ? (
          <div>
            <PicList pics={this.state.pics} />
            {this.renderShowMoreButton()}
          </div>
        ) : null}
      </div>
    );
  }
}
