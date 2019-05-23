import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>{this.props.type} Search</label>
            <div className="ui action input">
              <input
                type="text"
                value={this.state.term}
                onChange={e => {
                  this.setState({ term: e.target.value });
                }}
              />
              <button className="ui button">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
