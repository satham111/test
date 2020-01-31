import React from "react";
import Empoyee from "./Json/Employee";

class EmployeeTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
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
        <h2>Employee Details</h2>

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
            {this.state.items.map(user1 => (
              <tr>
                <td>{user1.User_Id}</td>
                <td>{user1.first_name}</td>
                <td>{user1.last_name}</td>
                <td>{user1.age}</td>
                <td>{user1.gender}</td>
                <td>
                  {user1.address.street} , {user1.address.state}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmployeeTables;
