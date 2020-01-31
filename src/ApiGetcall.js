import React from "react";
//import Empoyee from "./Json/Employee";
import axios from "axios";

class ApiGetcall extends React.Component {
  constructor(props) {
    console.log("satham ");
    super(props);
    this.state = {
      user: [],
      id1: this.props.filer
    };
    console.log("satham111 " + this.state.filer);
  }
  componentDidMount() {
    const filer = this.props.filer;
    console.log("satham " + filer);
    axios
      .get("https://jsonplaceholder.typicode.com/users" + filer)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      });
  }
  render() {
    return (
      <div className="container">
        <h2> {this.props.filer}</h2>
        <h2>Employee Details</h2>
        <table className="table">
          <thead>
            <th>Sl No</th>
            <th>Employee Name</th>
            <th>Employee email</th>
            <th>Employee User Name</th>
            <th>Employee Phone</th>
            <th>Employee Website</th>
          </thead>
          <tbody>
            {this.state.user.map((users, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.username}</td>
                <td>{users.phone}</td>
                <td>{users.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ApiGetcall;
