import React from "react";
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <div className="text-center" />
          </div>
        </div>
        <form>
          <div className="form-group">
            <label name="exampleInputEmail1">User Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <label name="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" name="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
