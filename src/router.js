import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./SubComponents/Home";
import EmployeeTables from "./EmployeeTables";

import EntryForm from "./EntryForm";
import Login from "./SubComponents/Login";
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/entryfrom" component={EntryForm} />
      <Route path="/employeetables" component={EmployeeTables} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
