import React, { Component } from "react";
import axios from "axios";

//retrieve API Key from .env file
const API_KEY = process.env.REACT_APP_API_KEY;

class List extends Component {
  state = {
    data: [],
    people: []
  };

  async componentDidMount() {
    //get data for people list as soon as page loads
    const info = await this.getData();
    this.setState({
      data: info
    });
  }

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
    const people = this.state.data;
    console.log("DATA FROM STATE: ", people);

    //generate table. map info for each person to respective columns
    return (
      <div>
        <h2>People</h2>
        <table className="people-table">
          <tbody>
            <tr className="table-headers">
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
            </tr>
            {people.map(person => {
              return (
                <tr key={`${person.id}`}>
                  <th>{`${person.first_name} ${person.last_name}`}</th>
                  <th>{`${person.email_address}`}</th>
                  <th>{`${person.title}`}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
