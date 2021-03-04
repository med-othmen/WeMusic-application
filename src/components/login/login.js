import React from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBIcon } from "mdbreact";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <MDBContainer className=" p-3 loginsurface ">
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol md="4" sm="12" className="">
          {" "}
          <p className="text-uppercase text-center bg-warning p-3 text-white">
            Identification
          </p>
          <div>
            <div className="form-group">
              <label htmlFor="example2">Login:</label>
              <input
                type="text"
                id="example2"
                placeholder="Email"
                className="form-control form-control-md"
              />
              <br></br>
              <label htmlFor="example2">Mot de Passe:</label>
              <input
                type="text"
                placeholder="Password"
                id="example2"
                className="form-control form-control-md"
              />
            </div>
          </div>
          <MDBBtn
            flat
            color="dark"
            className="z-depth-0 btn-flat w-responsive  w-100"
          >
            Se connecter
          </MDBBtn>
          <br></br>
          <a>
            <span className=""> Mot de passe oublié?</span>
          </a>
        </MDBCol>
        <MDBCol> </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol>
          <hr></hr>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol></MDBCol>
        <MDBCol md="4" sm="12">
          <p className="text-uppercase  text-center mt-3 bg-warning p-3 text-white">
            Pas encore de compte ?
          </p>
          <div>
            <MDBIcon icon="angle-double-down" size="3x" className="pl-5 pr-5" />
            <MDBIcon icon="angle-double-down" size="3x" className="pr-5" />{" "}
            <MDBIcon icon="angle-double-down" size="3x" className="pr-5" />{" "}
            <MDBIcon icon="angle-double-down" size="3x" className="pr-5" />{" "}
          </div>
          <div className="text-center">
            <Link to="/registre">
              <MDBBtn
                color="dark"
                className="warning-text border border-amber z-depth-0 w-responsive  w-100"
              >
                Créez un compte &nbsp;
                <span className="bg-warning text-dark">W</span>
                <span className="bg-dark text-warning">EMusic</span>&nbsp;
                GRATUITEMENT <i class="fa fa-bolt"></i>
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
