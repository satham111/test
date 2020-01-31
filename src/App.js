import React from "react";
// import Empoyee from "./Json/Employee";
// import ApiGetcall from "./ApiGetcall";
import DataRetrievingfromEndpoint from "./DataRetrievingfromEndpoint";
import EmployeeTables from "./EmployeeTables";
import EmployeeReadFromState from "./EmployeeReadFromState";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   items: []
  //   // };
  // }
  // componentDidMount() {
  //   this.setState({
  //     items: Empoyee
  //   });
  // }
  render() {
    return (
      <div>
        {/* <ApiGetcall /> */}
        {/* <DataRetrievingfromEndpoint /> */}
        {/* <EmployeeTables /> */}
        <DataRetrievingfromEndpoint />
      </div>
    );
    // this.state.items.map((item, key) => (
    //   <h1>
    //     {item.emp_no}
    //     {key}
    //   </h1>
    // ));
  }
}
export default App;
