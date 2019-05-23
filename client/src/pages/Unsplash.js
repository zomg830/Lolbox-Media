import React, { Component } from "react";

import unsplash from "../api/unsplash";
import SearchBar from "../components/SearchBar";
import PicList from "../components/PicList";
import BannerSegment from "../components/BannerSegment";

export default class Unsplash extends Component {
  state = { pics: [], showResults: false, term: null, offsetPage: 0 };

  onSearchSubmit = async (term, page = 1) => {
    const response = await unsplash
      .get("/search/photos", {
        params: {
          query: term,
          page: page,
          per_page: 20,
          client_id: process.env.REACT_APP_UNSPLASH
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
  };

  render() {
    return (
      <div>
        <BannerSegment type="picture" />
        <SearchBar onSubmit={this.onSearchSubmit} type="Picture" />
        {this.state.showResults ? (
          <div>
            <PicList pics={this.state.pics} />
            <button
              className="ui gray button"
              style={{ display: "flex", margin: "auto" }}
              onClick={() =>
                this.onSearchSubmit(this.state.term, this.state.offsetPage)
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
