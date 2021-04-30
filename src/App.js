import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Home from "./components/index";

//import actions reducers
import { productsActions } from "./components/actions/product.actions";
import { types_prodActions } from "./components/actions/types_prod.actions";
import { genres_prodActions } from "./components/actions/genre_prod.actions";
import { sleeve_condition_prodActions } from "./components/actions/sleeve_condition_prod.action";
import { artisteActions } from "./components/actions/artiste.actions";
import { articleActions } from "./components/actions/article.actions";

export class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.props.getallProducts();
    this.props.getalltypes();
    this.props.getallgenres();
    this.props.getallsleeve_condition();
    this.props.getallartistes();
    this.props.getallarticles();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getallProducts: () => dispatch(productsActions.getallproduct()),
  getalltypes: () => dispatch(types_prodActions.getalltypes()),
  getallgenres: () => dispatch(genres_prodActions.getallgenres()),
  getallsleeve_condition: () =>
    dispatch(sleeve_condition_prodActions.getallsleeve_condition()),
  getallartistes: () => dispatch(artisteActions.getallartistes()),
  getallarticles: () => dispatch(articleActions.getallarticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

//  <Redirect from="*" to="/" />
