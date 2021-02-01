import React, { Component } from "react";
const Country = [
  {
    name: "USA",
    id: 1,
  },
  {
    name: "India",
    id: 2,
  },
  {
    name: "Jermony",
    id: 3,
  },
];

const State = [
  {
    name: "Washington",
    id: 1,
    countryid: 1,
  },
  {
    name: "California",
    id: 2,
    countryid: 1,
  },
  {
    name: "Gujrat",
    id: 3,
    countryid: 2,
  },
  {
    name: "Kerla",
    id: 4,
    countryid: 2,
  },
  {
    name: "Berlin",
    id: 5,
    countryid: 3,
  },
  {
    name: "Victoria",
    id: 6,
    countryid: 3,
  },
];

const City = [
  {
    name: "Olympia",
    id: 1,
    stateid: 1,
  },
  {
    name: "Forks",
    id: 2,
    stateid: 1,
  },
  {
    name: "houston",
    id: 3,
    stateid: 2,
  },
  {
    name: "dallas",
    id: 4,
    stateid: 2,
  },
  {
    name: "surat",
    id: 5,
    stateid: 3,
  },
  {
    name: "ahmedabad",
    id: 6,
    stateid: 3,
  },
  {
    name: "kochi",
    id: 7,
    stateid: 4,
  },
  {
    name: "kolam",
    id: 8,
    stateid: 4,
  },
  {
    name: "orana",
    id: 9,
    stateid: 5,
  },
  {
    name: "batna",
    id: 10,
    stateid: 5,
  },
  {
    name: "Luanda",
    id: 11,
    stateid: 6,
  },
  {
    name: "lobito",
    id: 12,
    stateid: 6,
  },
];

export default class data extends Component {
  constructor() {
    super();
    this.state = {
      currentcontry: "",
      currentstate: "",
      stateList: [],
      cityList: []
    };
  }
  contryHandler = (e) => {
    this.setState({
      currentcontry: e.target.value,
      stateList: State.filter((item) => {
        return item.countryid === parseInt(e.target.value);
      }),
    });
  };

  stateHander = (e) => {
    this.setState({
      currentstate: e.target.value,
      cityList: City.filter((item) => {
        return item.stateid === parseInt(e.target.value);
      }),
    });
  };

  render() {
    return (
      <>
        <div>
          <select onChange={this.contryHandler}>
            {Country.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <br />
        <br />
        <div>
          {this.state.stateList && (
            <select onChange={this.stateHander}>
              {this.state.stateList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <br />
        <br />
        <div>
          {this.state.cityList && (
            <select>
              {this.state.cityList.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          )}
        </div>
      </>
    );
  }
}
