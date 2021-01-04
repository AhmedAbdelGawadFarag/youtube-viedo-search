import React from "react";
import SearchBar from "./SearchBar";
import GoogleApi from '../api/GoogleApi';
class App extends React.Component {
  callApi(term) {
    console.log(term);
    GoogleApi.get("/search",{
      params:{
        q:term
      }
    });
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
