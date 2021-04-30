import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="light" className="font-small pt-4  text-dark border-top Footer">
      <MDBContainer fluid className="text-center  text-md-left ">
        <MDBRow>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled text-dark">
                <h5 className=" text-dark">
                Kassette
                </h5>
              </li>
              <li className="list-unstyled">
              <h5 className=" text-dark">
                  CD/DVD
                  </h5>
              </li>{" "}
              <li className="list-unstyled">
              <h5 className=" text-dark">
                  Disque
                  </h5>
              </li>{" "}
             
            </ul>
            <div className="ml-5">
              <h2 className="h5-responsive text-dark font-weight-bold my-2">
                Suivez nous
              </h2>
              <img alt="" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
              <img alt="" src="https://img.icons8.com/color/48/000000/youtube-music.png" />
              <img alt="" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
            </div>
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
