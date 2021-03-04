import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Navbar from "./components/navbar/navbar";
import IndexGeuss from "./components/index";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Registre from "./components/registre/registre";
import Contact from "./components/contact/contact";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <IndexGeuss />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registre">
            <Registre />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signupclient">
            <h1>ICI nav </h1>
            <h1>ICI inscri client </h1>
            <h1>ICI f </h1>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
