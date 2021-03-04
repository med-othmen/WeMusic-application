import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import Typed from "react-typed";
export class topnavbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBNav
          color="white"
          className="d-flex justify-content-between  topnavbar border-bottom border-dark"
        >
          <MDBNavItem>
            <MDBNavLink disabled to="#!" className="black-text ">
              <MDBIcon icon="music" className="mr-2  text-white bg-dark p-2" />
              <Typed
                strings={[
                  "Bienvenue chez",
                  " We Music",
                  "Livraison",
                  "offerte 20-€",
                ]}
                typeSpeed={20}
                backSpeed={50}
                loop
              ></Typed>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink disabled to="#!" className="black-text">
              {" "}
              <Typed
                strings={[" 07 24 15 25 36", "-", "wemusic-contact@wm.fr", "-"]}
                typeSpeed={20}
                backSpeed={50}
                loop
              ></Typed>{" "}
              <MDBIcon icon="phone" className="ml-2 text-white bg-dark p-2" />
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(topnavbar);
