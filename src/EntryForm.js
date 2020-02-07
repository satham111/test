import React, { Component } from "react";
import axios from "axios";

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users :"",
      data:"",
      maindata:"",
      title: "",
      body: "",
      user_id: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = event => {
    
    event.preventDefault();
    console.log("test");
    console.log(this.state.user);
    // const title = this.state.title;
    // const body= this.state.body;
    // const user_id = this.state.user_id;
    //const data="";
    const user = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.state.user_id,
      
    };
    //console.log(user);
    //this.state.users.push(user);
    if (
      
      this.state.title &&
      this.state.body &&
      this.state.user_id 
    ) {
      axios.post(`https://jsonplaceholder.typicode.com/posts`, { user })
      .then(res => {
        console.log("firstValue "+res.data.user.body)
        this.setState({data:res.data.user})
        console.log("hussain "+JSON.stringify(res.data.user))
        this.setState({maindata:res.data})
        console.log("hussain "+JSON.stringify(res.data))
        //console.log(res['data']['title'])
        
        }
        
        
        )
        alert("User Added Successfully")
    }};
  
  

  render() {
    //var data="";
    //this.setState({data:this.state.data})
    return (
      <div id="test" className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="text-center" />
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
        <h2>Entry Form</h2>
          <div className="form-group">

          
            <div className="form-group">
              <label name="title">Title:</label>

              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Title"
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z0-9]{1,}"
                title="Must contain at least 6 or more characters"
              />
            </div>
            <div className="form-group">
              <label name="body">Body :</label>

              <input
                className="form-control"
                type="text"
                name="body"
                placeholder="Body"
                onChange={this.handleChange}
                pattern="[a-zA-Z ]{1,10}"
                required
              />
            </div>

            <div className="form-group">
              <label name="user_id">User Id :</label>

              <input
                className="form-control"
                type="text"
                name="user_id"
                placeholder="User Id"
                onChange={this.handleChange}
                required
                pattern="[a-zA-Z{1,}"
              />
            </div>
            
            <div className="form-group">
              <button  className="btn btn-primary btn-block">
                SAVE
              </button>
            </div>
          </div>



          <h2>Retrieval Data</h2>

<table className="table">
  <thead>
  <th>Id</th>
    <th>Title</th>
    <th>Body</th>
    <th>User Id</th>
  </thead>
  <tbody>
    
      <tr>
      <td>{this.state.maindata.id}</td>
        <td>{this.state.data.title}</td>
        <td>{this.state.data.body}</td>
        <td>{this.state.data.user_id}</td>
      </tr>
    
  </tbody>
</table>


        </form>
      </div>
    );
  }
}

export default EntryForm;
