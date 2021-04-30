import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBAlert } from "mdbreact";
import "./login.css";
import { Link } from "react-router-dom";
import { userActions } from "../actions/useractions";
import { alertActions } from "../actions/alert.actions";

export class login extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    console.log(email, password);
    this.props.singin(email,password)
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow className=" loginsurface  ">
          <MDBCol md="4"></MDBCol>
          <MDBCol className="bd_lodgin">
            {" "}
            <MDBAlert color="dark" className="mt-5">
              <form onSubmit={this.onHandleLogin}>
              <label className="text-center w-100 p-2 mt-3">Connexion</label>
                {this.props.alert.message && (
                  <MDBAlert
                    dismiss
                    className="mt-1 mb-2"
                    color={this.props.alert.type}
                  >
                    {this.props.alert.message}
                  </MDBAlert>
                )}
                <div>
                  <div className="form-group mt-4">
                    <input
                      type="text"
                      required
                      name="email"
                      placeholder="Email"
                      className="form-control form-control-md"
                    />
                    <br></br>
                    <input
                      type="password"
                      name="password"
                      placeholder="Mot de passe"
                      required
                      className="form-control form-control-md"
                    />
                  </div>
                </div>
                <MDBBtn
                  flat
                  type="submit"
                  color="success"
                  className="z-depth-0 w-100 w-responsive  mt-3 rounded m-0 "
                >
                  Se connecter
                </MDBBtn>
                <br />
                <div className="text-info w-100 mt-3 text-center">
                  <span> Mot de passe oublié?</span>
                </div>
                <hr></hr>
                <p>
Vous n'êtes pas encore membre de Wemusic !
N'attendez plus pour vous inscrire gratuitement !</p>
                <Link to="/registre">
                  <MDBBtn
                    outline
                    color=""
                    className="z-depth-0 w-100 w-responsive text-dark mt-3 border-0 "
                  >
                    Pas encore de compte ?
                  </MDBBtn>
                </Link>
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
  singin: (email, password) => dispatch(userActions.login(email, password)),
  clearAlerts: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(login);
