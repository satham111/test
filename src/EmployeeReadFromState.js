import React from "react";
import Empoyee from "./Json/Employee";

class EmployeeReadFromState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User_Id: "1000",
      first_name: "hussain",
      last_name: "20",
      age: "21",
      gender: "m",
      address: {
        addressLine1: "123",
        street: "George Town",
        state: "tamilnadu",
        country: "india"
      }
    };
  }
  componentDidMount() {
    this.setState({
      items: Empoyee
    });
  }
  render() {
    return (
      <div className="container">
        <h2>Employee Details From Table</h2>

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
              <td>{this.state.User_Id}</td>
              <td>{this.state.first_name}</td>
              <td>{this.state.last_name}</td>
              <td>{this.state.age}</td>
              <td>{this.state.gender}</td>
              <td>
                {this.state.address.street} , {this.state.address.state}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmployeeReadFromState;
