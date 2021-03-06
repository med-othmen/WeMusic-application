import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBNavbarBrand,
  MDBAnimation,
} from "mdbreact";
import { Link } from "react-router-dom";
import Topnavbar from "./topnavbar";
import "./navbar.css";
import Collaps from "../../imgs/radio-waves.svg";

class NavbarPage extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    return (
      <div>
        <MDBNavbar color="unique-color-dark" expand="md" className="z-depth-0 ">
          <MDBNavbarBrand>
            <Link to="/">
              <MDBAnimation type="bounce">
                <h3>
                  <span className="bg-warning text-dark  font-weight-bold rounded">
                    WE
                  </span>
                  <span className="text-white">
                    <strong>Music</strong>
                  </span>
                </h3>
              </MDBAnimation>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            image={Collaps}
            onClick={this.toggleCollapse("navbarCollapse3")}
            className="bg-warning"
          />
          <MDBCollapse
            id="navbarCollapse3"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/" className="text-center   text-white  ">
                  <big> Accueil</big>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!" className="text-center    text-white ">
                  <big> Nos évenements</big>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!" className="text-center    text-white  ">
                  <big> Nos offres</big>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                {" "}
                <div className="input-group p-2 mr-5">
                  <input
                    type="text"
                    className="form-control rounded-left"
                    placeholder="rechercher un artiste, un album, un titre"
                    aria-label="Username"
                    aria-describedby="basic-addon"
                  />
                  <div className="input-group-prepend ">
                    <span
                      className="input-group-text mr-0 bg-warning border-0 rounded-right"
                      id="basic-addon"
                    >
                      <i className="fa fa-search prefix"></i>
                    </span>
                  </div>
                </div>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link to="/login">
                  <MDBBtn
                    color=""
                    className="z-depth-0 border  p-2  text-white rounded "
                  >
                    Connexion
                  </MDBBtn>
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="/registre">
                  <MDBBtn
                    color="warning"
                    className="z-depth-0 border border-warning  p-2  rounded "
                  >
                    Créer un compte
                  </MDBBtn>
                </Link>
              </MDBNavItem>{" "}
              <MDBNavItem>
                <Link to="/contact">
                  <p className="mt-2 p-1 text-white font-weight-bolder">
                    Contacter nous
                  </p>
                </Link>{" "}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>{" "}
        <Topnavbar />
      </div>
    );
  }
}

export default NavbarPage;

/*

      <MDBFormInline waves>
                  <div className="md-form my-0 bg-white rounded ">
                    <input className="form-control mr-sm-5 "  type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>



                */
