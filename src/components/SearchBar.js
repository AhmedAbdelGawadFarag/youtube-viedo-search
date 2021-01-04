import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SearchTerm: "" };
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.callApi(this.state.SearchTerm);
  }
  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <div style={{ margin: "2% 10% 0% 10%" }} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.SearchTerm}
              onChange={(event) =>
                this.setState({ SearchTerm: event.target.value })
              }
            />
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;
