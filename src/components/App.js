import React from "react";
import SearchBar from "./SearchBar";
class App extends React.Component {
  callApi(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar callApi={(term) => this.callApi(term)}></SearchBar>
      </div>
    );
  }
}
export default App;
