import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "../assets/css/App.css";

import Landing from "./Landing";
import EventNew from "./events/EventNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route exact path="/new" component={EventNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
