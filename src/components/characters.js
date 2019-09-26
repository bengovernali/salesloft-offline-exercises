import React, { Component } from "react";

class Characters extends Component {
  handleClick() {
    console.log("YOU CLICKED ME!");
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          Calculate Unique Email Characters
        </button>
        <table className="character-table">
          <tbody>
            <tr>
              <th>Character</th>
              <th>Count</th>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Characters;
