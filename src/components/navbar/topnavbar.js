import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBCardHeader,
} from "mdbreact";
import Typed from "react-typed";
export class topnavbar extends Component {
  render() {
    return (
      <MDBCardHeader className="p-0">
        <BrowserRouter>
          <MDBNav className="d-flex justify-content-between   ">
            <MDBNavItem>
              <MDBNavLink disabled to="#!" className="black-text ">
                <MDBIcon
                  icon="music"
                  className="mr-2  text-white bg-dark p-2 rounded"
                />
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
                  strings={[
                    " 07 24 15 25 36",
                    "-",
                    "wemusic-contact@wm.fr",
                    "-",
                  ]}
                  typeSpeed={20}
                  backSpeed={50}
                  loop
                ></Typed>{" "}
                <MDBIcon
                  icon="phone"
                  className="ml-2 text-white bg-dark p-2 rounded"
                />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
        </BrowserRouter>
      </MDBCardHeader>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(topnavbar);
