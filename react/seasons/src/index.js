import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./seasondisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.errorMessage })
    );
  }
  renderContent() {
    if (this.state.errorMessage) {
      return <div> {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonsDisplay lattitude={this.state.lat} />
        </div>
      );
    }
    return <Spinner />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
