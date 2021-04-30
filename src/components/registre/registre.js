import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAlert } from "mdbreact";
import { Link } from "react-router-dom";
import "./registre.css";
import { userActions } from "../actions/useractions";
import { alertActions } from "../actions/alert.actions";

export class registre extends Component {
  constructor(props) {
    super(props);
  }
  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let role = "client";
    const data = {
      name,
      email,
      password,
      role,
    };

    this.props.Signup(data);
  };
  render() {
    return (
      <MDBContainer className="registresurface ">
        <MDBRow className="p-0">
          <MDBCol md="4"> </MDBCol>
          <MDBCol md="4">
            <MDBAlert color="dark" className="mt-5">
              <form onSubmit={this.onHandleRegistration}>
                <label className="text-center w-100 p-2 mt-3">
                  Inscription gratuite et rapide !
                </label>
                {this.props.alert.message && (
                  <MDBAlert
                    dismiss
                    className="mt-1 mb-2"
                    color={this.props.alert.type}
                  >
                    {this.props.alert.message}
                  </MDBAlert>
                )}

                <div className="form-group mt-4 ">
                  <input
                    type="text"
                    name="name"
                    required
                    id="defaultFormRegisterNameEx"
                    className="form-control "
                    placeholder="Nom"
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    required
                    id="defaultFormRegisterEmailEx"
                    className="form-control"
                    placeholder="E-mail"
                  />
                  <br />
                  <input
                    type="password"
                    name="password"
                    required
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                    placeholder="Mot de passe"
                  />
                  <br />
                  <div className="text-center mt-4 ">
                    <MDBBtn
                      type="submit"
                      color="dark"
                      className="z-depth-0  w-responsive m-0  w-100 rounded"
                    >
                      S'inscrire
                    </MDBBtn>
                  </div>{" "}
                  <hr></hr>
                  <br />
                  <Link to="/login">
                    <MDBBtn
                      type="submit"
                      color=""
                      className="z-depth-0 w-100 w-responsive text-dark  m-0 rounded "
                    >
                      Se connecter
                    </MDBBtn>
                  </Link>
                </div>
              </form>
            </MDBAlert>
          </MDBCol>
          <MDBCol md="4"></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  Signup: (user) => dispatch(userActions.register(user)),
  clearAlerts: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(registre);
