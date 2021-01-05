import React from "react";
import GoogleApi from "../api/GoogleApi";
import SearchBar from "./SearchBar";
import YoutubeVideoList from "./YoutubeVideoList";
class App extends React.Component {
  state = { videos: [] };
  callApi(term) {
    console.log(term);
    GoogleApi.get("/search", {
      params: {
        q: term,
      },
    }).then((res) => this.setState({ videos: res.data.items }));
  }

  render() {
    return (
      <div>
        <SearchBar callApi={(term) => this.callApi(term)}></SearchBar>
        <YoutubeVideoList videos={this.state.videos}></YoutubeVideoList>
      </div>
    );
  }
}
export default App;
