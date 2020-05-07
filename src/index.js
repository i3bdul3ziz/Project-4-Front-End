
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/App.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Index {...props} />} />
      <Route path="/trips" render={props => <Index {...props} />} />
      <Route path="/signin" render={props => <Index {...props} />} />
      <Route path="/signup" render={props => <Index {...props} />} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
