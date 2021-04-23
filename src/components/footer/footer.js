import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="white" className="font-small pt-4  text-dark border-top ">
      <MDBContainer fluid className="text-center  text-md-left ">
        <MDBRow>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled text-dark">
                <a href="#!" className=" text-dark">
                  K7
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className=" text-dark">
                  CD/DVD
                </a>
              </li>{" "}
              <li className="list-unstyled">
                <a href="#!" className=" text-dark">
                  CD/DVD
                </a>
              </li>{" "}
              <li className="list-unstyled">
                <a href="#!" className=" text-dark">
                  CD/DVD
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h2>
              <span className="bg-success text-white p-2 font-weight-bold  border-0">
                WE
              </span>
              <span className="white-text bg-dark border-0 pr-3 pl-2 pb-1 p-0  ">
                music
              </span>
            </h2>
            <p className="mt-4 mb-5">
              Vos émotions méritent d'avoir leur musique
            </p>

            <div className="d-flex justify-content-around">
              <ul className="list-inline text-left list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-dark">
                    <MDBIcon fab icon="twitter" size="2x" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-dark">
                    <MDBIcon fab icon="linkedin-in" size="2x" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-dark">
                    <MDBIcon fab icon="instagram" size="2x" />
                  </a>
                </li>{" "}
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic text-dark">
                    <MDBIcon fab icon="youtube" size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright  text-center py-2 text-success">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com" className="black-text">
            {" "}
            <span>wemusic-dev.com</span>
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
