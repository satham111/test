import React from "react";
//import Empoyee from "./Json/Employee";
import axios from "axios";
// import ApiGetcall from "./ApiGetcall";

class DataRetrievingfromEndpoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      filter: "",
      user1: [],
      isdata: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const user = res.data;
      this.setState({ user });
    });
  }
  handleChange(e) {
    this.setState({ selectedTeam: e.target.value });
    //const filter = e.target.value;
    this.setState({ filter: e.target.value });
    //const path = "https://jsonplaceholder.typicode.com/users/" + filter;

    // const user = this.state.user.filter(row => {
    //   return row.id.match(e.target.value);
    // });
    console.log(this.state.user);
    const user = this.state.user.filter(row => {
      return row.id.match(e.target.value);
    });

    this.setState({ user1: user });

    // axios.get(path).then(res => {
    //   const user1 = res.data;
    //   this.setState({ user1 });
    // });
    if (this.state.user.name && this.state.user.username) {
      this.setState({ isdata: true });
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Employee Details</h2>
        <select value={this.state.selectedTeam} onChange={this.handleChange}>
          <option key="" value="---Select----">
            ----Select------
          </option>
          {this.state.user.map(team => (
            <option key={team.value} value={team.value}>
              {team.id}
            </option>
          ))}
        </select>
        <h2> {this.props.filer}</h2>
        <table className="table">
          <thead>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Employee email</th>
            <th>Employee User Name</th>
            <th>Employee Phone</th>
            <th>Employee Website</th>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.user1.id}</td>
              <td>{this.state.user1.name}</td>
              <td>{this.state.user1.email}</td>
              <td>{this.state.user1.username}</td>
              <td>{this.state.user1.phone}</td>
              <td>{this.state.user1.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default DataRetrievingfromEndpoint;
