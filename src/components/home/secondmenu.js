import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import "./secondmenu.css";
import {
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,MDBBtn
} from "mdbreact";
export class searchbar extends Component {
  render() {
    return (
 
  
          <BrowserRouter>
            <MDBNav>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    color=""
                    outline
                    className="  z-depth-0 "
                  >
                    <h5> Genre </h5>
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
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    color=""
                    outline
                    className=" z-depth-0 "
                  >
                    <h5> Artiste</h5>
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
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    color=""
                    outline
                    className="z-depth-0 "
                  >
                    <h5> Genre</h5>
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
              </MDBNavItem>
            </MDBNav>
          </BrowserRouter>
       
 
    );
  }
}

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(searchbar);

