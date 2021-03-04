import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      color="unique-color-dark"
      className="font-small pt-4  text-white"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5>
              <span className="bg-warning text-dark font-weight-bold">WE</span>
              <span className="bg-dark text-warning">Music</span>
            </h5>
            <p>Vos émotions méritent d'avoir leur musique</p>
            <div className="">
              {" "}
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-warning">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-warning">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-warning">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">K7</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">CD/DVD</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 text-warning">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com" className="amber-text">
            {" "}
            wemusic-dev.com{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
