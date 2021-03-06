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
  MDBIcon,
  MDBTooltip,
} from "mdbreact";
export class searchbar extends Component {
  render() {
    return (
      <MDBRow className=" searchbar ">
        <MDBCol md="10" className="text-white pt-0 text-center mt-0 ">
          <BrowserRouter>
            <MDBNav>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle
                    color=""
                    outline
                    className="searchbarDropDown  mt-1 text-white z-depth-0 border-bottom border-warning"
                  >
                    <h6> Genre</h6>
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
                    className="searchbarDropDown  mt-1   text-white z-depth-0 border-bottom border-warning"
                  >
                    <h6> Artiste</h6>
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
                    className="searchbarDropDown  mt-1 text-white z-depth-0 border-bottom border-warning"
                  >
                    <h6> Genre</h6>
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
                    className="searchbarDropDown  mt-1   text-white z-depth-0 border-bottom border-warning"
                  >
                    <h6> Artiste</h6>
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
                    className="searchbarDropDown  mt-1 text-white z-depth-0 border-bottom border-warning"
                  >
                    <h6> Genre</h6>
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
                    className="searchbarDropDown  mt-1   text-white z-depth-0 border-bottom border-warning"
                  >
                    <h6> Artiste</h6>
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
            </MDBNav>
          </BrowserRouter>
        </MDBCol>
        <MDBCol lg="2" className="d-flex flex-row-reverse ">
          <MDBNavItem>
            <MDBTooltip placement="bottom">
              <Link>
                <MDBIcon
                  icon="shopping-cart"
                  className="border-0 rounded   text-white mt-1 mb-1  p-3 z-depth-0"
                >
                  &nbsp;&nbsp; Mon panier
                </MDBIcon>
              </Link>
              <div className="mt-3"> Mon panier</div>
            </MDBTooltip>
          </MDBNavItem>
        </MDBCol>
      </MDBRow>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(searchbar);
