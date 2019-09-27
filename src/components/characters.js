import React, { Component } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class Characters extends Component {
  state = {
    characters: []
  };

  //click handler for button
  handleClick = async () => {
    //fetch data from API
    const info = await this.getData();
    //map emails to an array
    const emails = info.map(person => {
      return person.email_address;
    });
    //calculate character frequencies
    const frequencies = await this.getFrequencies(emails);
    console.log(frequencies);
    this.setState({
      characters: frequencies
    });
    console.log(this.state.characters);
  };

  //calculate the frequency of each unique character in all the email addresses
  async getFrequencies(emails) {
    let chart = {};
    //iterate through each email in the array
    emails.forEach(email => {
      //iterate through each character in each email
      for (let i = 0; i < email.length; i++) {
        let character = email[i];
        //if character is already in email, increment by one, else initialize it with a value of 1
        if (chart.hasOwnProperty(character)) {
          chart[character] += 1;
        } else {
          chart[character] = 1;
        }
      }
    });
    const sorted = await this.sortFrequencies(chart);
    return sorted;
  }

  //declared separate function to sort the character frequencies.
  sortFrequencies(freqChart) {
    let freqArray = [];
    for (let character in freqChart) {
      freqArray.push([character, freqChart[character]]);
    }
    freqArray.sort(function(a, b) {
      return b[1] - a[1];
    });
    return freqArray;
  }

  //same as in list.js
  //this could probably be done once upon component mounting of the entire app
  //then passed as props
  getData = async () => {
    //using cors-anywhere to bypass CORS access header issue
    const url =
      "https://cors-anywhere.herokuapp.com/https://api.salesloft.com/v2/people.json";
    const options = { headers: { Authorization: `Bearer ${API_KEY}` } };

    //use axios get method to retrieve data from API
    const response = await axios.get(url, options);

    //only retrieve the data we need
    const data = response.data.data;
    return data;
  };

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
