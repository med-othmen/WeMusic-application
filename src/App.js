import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Navbar from "./components/navbar/navbar";
import Home from "./components/index";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Registre from "./components/registre/registre";
import Contact from "./components/contact/contact";
import Cart from "./components/cart/cart";
import Profil from "./components/profil/profil";
import Article from './components/article/article';
import ProdContainer from './components/home/Product.container'
import { productsActions } from "./components/actions/product.actions";
import  {types_prodActions} from "./components/actions/types_prod.actions"
import  {genres_prodActions} from "./components/actions/genre_prod.actions"
import  {sleeve_condition_prodActions} from "./components/actions/sleeve_condition_prod.action"
import {artisteActions} from './components/actions/artiste.actions'
import {articleActions} from './components/actions/article.actions'

export class App extends Component {
  state={
    data:[]
  }
  componentDidMount(){
    this.props.getallProducts();
    this.props.getalltypes()
    this.props.getallgenres()
    this.props.getallsleeve_condition()
    this.props.getallartistes()
    this.props.getallarticles()
  }
  render() {
 
    return (
      <BrowserRouter>
      <Navbar />
      
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/registre">
          <Registre />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>{" "}
        <Route path="/articles">
          <Article />
        </Route>
        <Route path="/produits">
          <ProdContainer />
        </Route>
        <Route exact path="/mycart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
      <Redirect from="*" to="/" />
    </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  getallProducts: () => dispatch(productsActions.getallproduct()),
  getalltypes: () => dispatch(types_prodActions.getalltypes()),
  getallgenres: () => dispatch(genres_prodActions.getallgenres()),
  getallsleeve_condition: () => dispatch(sleeve_condition_prodActions.getallsleeve_condition()),
  getallartistes: () => dispatch(artisteActions.getallartistes()),
  getallarticles: () => dispatch(articleActions.getallarticles()),

});

export default connect(mapStateToProps, mapDispatchToProps)(App)

