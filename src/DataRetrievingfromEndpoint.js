import React from "react";
//import Empoyee from "./Json/Employee";
import axios from "axios";
// import ApiGetcall from "./ApiGetcall";

class DataRetrievingfromEndpoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filter: "",
      user: "",
      isdata: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }
  handleChange(e) {
    this.setState({ selectedTeam: e.target.value });
    this.setState({ filter: e.target.value });
    const user = this.state.users.find(user => user.id === e.target.value);
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="container">
        <h2>Employee Details</h2>
        <select value={this.state.selectedTeam} onChange={this.handleChange}>
          <option key="" value="---Select----">
            ----Select------
          </option>
          {this.state.users.map(team => (
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
              <td>{this.state.user.id}</td>
              <td>{this.state.user.name}</td>
              <td>{this.state.user.email}</td>
              <td>{this.state.user.username}</td>
              <td>{this.state.user.phone}</td>
              <td>{this.state.user.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default DataRetrievingfromEndpoint;
