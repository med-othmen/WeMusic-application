import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBtnGroup } from "mdbreact";
import "./registre.css";
import { Link } from "react-router-dom";
const FormPage = () => {
  return (
    <MDBContainer className="registresurface">
      <MDBRow className="p-3">
        <MDBCol md="4"></MDBCol>
        <MDBCol md="4">
          <p className="text-uppercase text-center bg-warning p-3 text-white ">
            INSCRIPTION
          </p>
          <form>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Votre nom
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm votre email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4 ">
              <MDBBtnGroup className="w-responsive  w-100">
                <MDBBtn flat color="dark" className="z-depth-0 ">
                  S'enregistrer
                </MDBBtn>
                <MDBBtn flat color="amber" className="z-depth-0 ">
                  Se connecter
                </MDBBtn>{" "}
              </MDBBtnGroup>
            </div>
          </form>
        </MDBCol>
        <MDBCol md="4"></MDBCol>{" "}
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
