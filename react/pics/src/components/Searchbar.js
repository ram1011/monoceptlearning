import React from "react";

class Searchbar extends React.Component {
  // Ontextchange(event) {
  //   console.log(event.target.value);
  // }
  state = { term: "" };
  Onformsubmitted = (e) => {
    e.preventDefault();
    this.props.onsubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.Onformsubmitted}>
          <div className="ui container">
            <div className="ui form">
              <div className="field">
                <label>Search Image</label>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={(e) => this.setState({ term: e.target.value })}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
