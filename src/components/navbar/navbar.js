import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBCol,
  MDBRow,
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
        <MDBNavbar
          color="unique-color-dark"
          expand="md"
          className="z-depth-0 fixed-top "
        >
          <MDBNavbarBrand>
            <Link to="/">
              <MDBAnimation type="bounce">
                <h3>
                  <span className="bg-warning text-dark  font-weight-bold rounded-left">
                    WE
                  </span>
                  <span className="bg-dark text-warning ">
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
              {" "}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    caret
                    color=""
                    className="text-warning border border-warning  rounded-bottom "
                  >
                    Genre
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem header>
                      Selectionner genre{" "}
                    </MDBDropdownItem>
                    <MDBDropdownItem>HipHop</MDBDropdownItem>
                    <MDBDropdownItem>Soul</MDBDropdownItem>
                    <MDBDropdownItem>Funk</MDBDropdownItem>
                    <MDBDropdownItem>Jass</MDBDropdownItem>
                    <MDBDropdownItem>Classique</MDBDropdownItem>
                    <MDBDropdownItem>Rock</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>{" "}
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    caret
                    color=""
                    className="text-warning border border-warning  rounded-bottom "
                  >
                    Artiste
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem header>
                      Selectionner un artiste{" "}
                    </MDBDropdownItem>
                    <MDBDropdownItem>Diam's</MDBDropdownItem>
                    <MDBDropdownItem>Moby</MDBDropdownItem>
                    <MDBDropdownItem>Ravin</MDBDropdownItem>
                    <MDBDropdownItem>Billy Talent</MDBDropdownItem>
                    <MDBDropdownItem>Spin Doctors</MDBDropdownItem>
                    <MDBDropdownItem>Hanson</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>{" "}
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className=" text-center text-warning border border-warning mt-2  rounded-bottom"
                >
                  Nos produits
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#!"
                  className="text-center  border text-warning border-warning mt-2 rounded-bottom "
                >
                  Nos offres
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBRow>
                <MDBCol>
                  {" "}
                  <MDBNavItem>
                    <MDBNavLink
                      className="text-center  block-example border border-warning  rounded  mt-2 "
                      to="#!"
                    >
                      {" "}
                      <Link to="/contact">
                        <MDBIcon
                          icon="envelope"
                          className="text-warning  text-center ml-2 mr-2"
                        />{" "}
                      </Link>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBCol>
                <MDBCol>
                  {" "}
                  <MDBNavItem>
                    <MDBNavLink
                      className=" border border-warning  rounded  text-center mt-2 "
                      to="#!"
                    >
                      <MDBIcon
                        icon="shopping-cart"
                        className="text-warning ml-2 mr-2"
                      />
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBCol>
                <MDBCol>
                  {" "}
                  <MDBNavItem>
                    <Link to="/login">
                      <MDBBtn outline color="warning ">
                        Connexion
                      </MDBBtn>
                    </Link>
                  </MDBNavItem>
                </MDBCol>
              </MDBRow>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>{" "}
        <Topnavbar />
      </div>
    );
  }
}

export default NavbarPage;
