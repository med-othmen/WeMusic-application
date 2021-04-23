import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
export class topnavbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBNav
          color="white"
          className="d-flex justify-content-between mt-1 mb-1"
        >
          <MDBNavItem>
            <MDBNavLink disabled to="#!" className="text-info">
              <MDBIcon icon="music" className="mr-1 " /> Bienvenue chez We Music
            </MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink disabled to="#!" className="text-info">
              {" "}
              <MDBIcon icon="phone" className="mr-2" />
              07 24 15 25 36
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
