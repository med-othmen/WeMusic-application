import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
  MDBAnimation,
  MDBIcon,
  MDBBtn,
  MDBBadge,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Link } from "react-router-dom";
import Topnavbar from "./topnavbar";
import "./navbar.css";
import Collaps from "../../imgs/radio-waves.svg";
import { userActions } from "../actions/useractions";
import "./navbar.css";
export class NavbarPage extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  render() {
    return (
      <div className=" bg-white sticky-top  ">
        <Topnavbar />
        <MDBNavbar color="" expand="sm" className="z-depth-0 m-0 p-2">
          <MDBNavbarBrand>
            <Link to="/">
              <MDBAnimation type="bounce">
                <h1>
                  <span className="bg-success text-white p-2 font-weight-bold  border-0">
                    WE
                  </span>
                  <span className="white-text bg-dark border-0 pr-3 pl-2 pb-1 p-0  ">
                    music
                  </span>
                </h1>
              </MDBAnimation>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            image={Collaps}
            onClick={this.toggleCollapse("navbarCollapse3")}
            className="bg-success text-white"
          />
          <MDBCollapse
            id="navbarCollapse3"
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/" className="  text-dark  mt-2">
                  <p className="h5-responsive ">Accueil</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/produits" className="   text-dark mt-2 ">
                  <p className="h5-responsive  ">Produits</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="articles" className="  text-dark mt-2">
                  <p className="h5-responsive  ">Actualité</p>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact" className="  text-dark  mt-2">
                  <p className="h5-responsive  ">Contacter nous</p>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            {this.props.user ? (
              <MDBNavbarNav right>
                <MDBNavItem>
                  <Link to="/mycart">
                    <MDBBtn
                      color=""
                      className="z-depth-0  p-4  mt-2 mr-4 rounded "
                    >
                      <h5>
                        <MDBIcon
                          size="2x"
                          icon="shopping-bag "
                          className="text-dark "
                        />{" "}
                        <MDBBadge color="success">
                          {this.props.cart.length}
                        </MDBBadge>
                      </h5>
                    </MDBBtn>
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown
                    dropleft
                    size="lg"
                    className="z-depth-0  mt-0 mr-4  "
                  >
                    <MDBDropdownToggle nav>
                      <img
                        src="https://qualium-investissement.com/wp-content/uploads/2017/05/inconnu-small.jpg"
                        width="45px"
                        alt=""
                        className="rounded-circle mt-4 img-fluid  "
                      />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu >
                      <Link to="/profil">
                        <MDBDropdownItem href="#!">
                          <MDBBtn outline color="" className="z-depth-0 w-100 p-2">
                            Profil
                          </MDBBtn>
                        </MDBDropdownItem >{" "}
                      </Link>
                      <MDBDropdownItem href="#!">
                        <MDBBtn
                       
                          color=""
                          className="z-depth-0 p-2 w-100"
                          onClick={() => this.props.logout()}
                        >
                          Déconexion
                        </MDBBtn>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            ) : (
              <MDBNavbarNav right>
                <MDBNavItem>
                  <Link to="/mycart">
                    <MDBBtn
                      color=""
                      className="z-depth-0  p-4  mt-2 mr-4 rounded "
                    >
                      <h5>
                        <MDBIcon
                          size="2x"
                          icon="shopping-bag "
                          className="text-dark "
                        />{" "}
                        <MDBBadge color="success">
                          {this.props.cart.length}
                        </MDBBadge>
                      </h5>
                    </MDBBtn>
                  </Link>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown
                    dropleft
                    size="sm"
                    className="z-depth-0  p-4  mt-0 mt-1 "
                  >
                    <MDBDropdownToggle nav>
                      <h6>
                        <MDBIcon size="2x" icon="user" className="text-dark " />{" "}
                      </h6>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <Link to="/login">
                        <MDBDropdownItem  href="#!">Connexion</MDBDropdownItem>{" "}
                      </Link>
                      <Link to="/registre">
                        <MDBDropdownItem  href="#!">Inscription</MDBDropdownItem>
                      </Link>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authentication.user,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarPage);

/*
  <MDBNavItem>
                  <Link to="/profil">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      width="45px"
                      alt=""
                      className="rounded-circle   mt-2 img-fluid  "
                    />
                  </Link>
                </MDBNavItem>{" "}
              */
