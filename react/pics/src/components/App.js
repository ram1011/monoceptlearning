import React from "react";
import Searchbar from "./Searchbar";
import api from "../api/api";
import ImagesList from "./ImagesList";

class App extends React.Component {
  state = { images: [] };
  formSubmitted = async (term) => {
    const response = await api.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <Searchbar onsubmit={this.formSubmitted} />
        {this.state.images.length} results
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
