import React, { Component } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class List extends Component {
  async componentDidMount() {
    const data = await this.getData();
    console.log("THIS IS THE DATA: ", data);
  }

  getData = async () => {
    const url = "https://api.salesloft.com/v2/people.json";
    const options = { headers: { Authorization: `Bearer ${API_KEY}` } };

    axios.get(url, options).then(response => {
      console.log(response);
      return response;
    });
  };

  render() {
    return (
      <div className="table">
        <div>Table will go here</div>
      </div>
    );
  }
}

export default List;
