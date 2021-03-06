import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import "./contact.css";
const ContactPage = () => {
  return (
    <MDBContainer className="mt-0 contactsection">
      <div className="text-center text-white mb-2 bg-warning text-uppercase p-4 border-0">
        <h3> Contacter nous</h3>
      </div>

      <MDBRow>
        <MDBCol lg="5">
          <MDBCard className="z-depth-0">
            <MDBCardBody>
              <div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="example2">Nom:</label>
                  <input
                    type="text"
                    id="example2"
                    placeholder="Nom"
                    className="form-control form-control-md"
                  />
                  <br></br>
                  <label htmlFor="example2">E-mail:</label>
                  <input
                    type="text"
                    placeholder="E-mail"
                    id="example2"
                    className="form-control form-control-md"
                  />{" "}
                  <br></br>
                  <label htmlFor="example2">Sujet:</label>
                  <input
                    type="text"
                    placeholder="Sujet"
                    id="example2"
                    className="form-control form-control-md"
                  />
                </div>{" "}
                <br></br>
                <label htmlFor="example2">Message:</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Votre message"
                />
              </div>{" "}
              <br></br>
              <div className="text-center warning-text  ">
                <MDBBtn color="dark" className="z-depth-0 w-responsive  w-100">
                  Envoyer
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded map-container z-depth-0"
            style={{ height: "300px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center mb-4">
            <MDBCol md="4" sm="4">
              <MDBBtn color="amber" className="text-dark z-depth-0">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>

              <p className="mt-3"> New York, 94126 United States</p>
            </MDBCol>
            <MDBCol md="4" sm="4">
              <MDBBtn floating color="amber" className="text-dark z-depth-0">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p className="mt-3">+ 01 234 567 89</p>
            </MDBCol>
            <MDBCol md="4" sm="4">
              <MDBBtn floating color="amber" className="text-dark z-depth-0">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p className="mt-3">info@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactPage;
