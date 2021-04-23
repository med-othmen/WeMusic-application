import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "./index.css";

// import components
import Home from "./home/home";

export class index extends Component {
  render() {
    return (
      <div className="index_geuss">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/client/profil">heuss route 2</Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
