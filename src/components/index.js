import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, useParams } from "react-router-dom";
import "./index.css";

// import components
import Home from "./home/home";
import Navbar from "./navbar/navbar";

import Footer from "./footer/footer";
import Login from "./login/login";
import Registre from "./registre/registre";
import Contact from "./contact/contact";
import Cart from "./cart/cart";
import Profil from "./profil/profil";
import Article from "./article/article";
import ProdContainer from "./home/Product.container";
import Productview from "./cards/productCard";
import ScrollToTopOnMount from "./router/ScrollToTop";
const isAuthenticated = (token) => {
  if (token) return true;
};
const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated(localStorage.getItem("user"))) {
    return <Redirect to="/login" />;
  } else {
    return (
      // eslint-disable-line
      <Route
        {...rest}
        render={(props) => React.createElement(component, props)}
      />
    );
  }
};
export class index extends Component {
  render() {
    return (
      <div className="index_geuss">
        <ScrollToTopOnMount />
        <Navbar />
        <div>
          <Route exact path="/">
            <ScrollToTopOnMount />
            <Home />
          </Route>
          <Route path="/login">
            <ScrollToTopOnMount />
            <Login />
          </Route>
          <PrivateRoute
            path="/profil"
            component={(ScrollToTopOnMount, Profil)}
          />
          <Route path="/registre">
            <ScrollToTopOnMount />
            <Registre />
          </Route>
          <Route path="/contact">
            <ScrollToTopOnMount />
            <Contact />
          </Route>{" "}
          <Route path="/articles">
            <ScrollToTopOnMount />
            <ScrollToTopOnMount />
            <Article />
          </Route>
          <Route path="/produits">
            <ScrollToTopOnMount />
            <ProdContainer />
          </Route>
          <Route path="/mycart">
            <ScrollToTopOnMount />
            <Cart />
          </Route>
          <Route
            path={"/product/:id"}
            render={(props) => <Productview {...props} params={useParams} />}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
