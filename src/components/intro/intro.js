import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBAnimation,
  MDBAlert,
} from "mdbreact";
import { Link } from "react-router-dom";
import { userActions } from "../actions/useractions";
import { alertActions } from "../actions/alert.actions";
export class Intro extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;
    this.props.singin(email, password);
  };
  render() {
    return (
      <div className="bdg">
        <MDBView>
          <MDBMask className="text-dark " />
          <MDBContainer
            style={{ height: "100%", width: "100%" }}
            className="d-flex justify-content-center white-text align-items-center mt-5"
          >
            <MDBRow>
              <MDBCol
                md={this.props.authentication.loggedIn ? "12" : "6"}
                className="text-center text-md-left mt-xl-5 mb-5"
              >
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5 text-white bg-dark p-4">
                    Trouvez ce que vous kiffer de musique, films, encien
                    records...
                  </h1>
                  <hr className="hr-light " />
                  <h6 className="mb-4 bg-white text-dark p-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                  <div className="text-center">
                    <Link to="produits">
                      <MDBBtn color="success" className="mt-5 ">
                     <h5>   Chercher un produit</h5>
                      </MDBBtn>
                    </Link>
                  </div>
                </MDBAnimation>
              </MDBCol>
              {this.props.authentication.loggedIn ? (
                ""
              ) : (
                <MDBCol md="6" className="mt-xl-5 d-none d-lg-block">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <form
                      className="mt-5 bg-white p-5  "
                      onSubmit={this.onHandleLogin}
                    >
                      <h3 className="text-center text-dark mb-5">
                      Connexion
                      </h3>
                      {this.props.alert.message && (
                        <MDBAlert
                          dismiss
                          className=" mb-4"
                          color={this.props.alert.type}
                        >
                          {this.props.alert.message}
                        </MDBAlert>
                      )}
                      <div className="grey-text">
                        <div className="form-group">
                          <input
                            placeholder="e-mail ou nom d'utilisateur"
                            type="email"
                            name="email"
                            className="form-control"
                            id="formGroupExampleInput"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            name="password"
                            placeholder="Mot de passe"
                            type="password"
                            className="form-control"
                            id="formGroupExampleInput"
                          />
                        </div>
                      </div>
                      <div className="text-center w-100">
                        <MDBBtn className="w-100" type="submit" color="dark">
                         <h6> Login</h6>
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBAnimation>
                </MDBCol>
              )}
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert,
  authentication: state.authentication,
});

const mapDispatchToProps = (dispatch) => ({
  singin: (email, password) => dispatch(userActions.login(email, password)),
  clearAlerts: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
