import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from "mdbreact";

const ContactPage = () => {
  return (
    <MDBContainer className="mt-2">
      <div>
        {" "}
        <p className="text-uppercase text-white text-center bg-warning p-3 ">
          Contacter nous
        </p>
      </div>

      <MDBRow>
        <MDBCol lg="5">
          <MDBCard className="z-depth-0">
            <MDBCardBody>
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    id="example2"
                    placeholder="Email"
                    className="form-control form-control-md"
                  />
                  <br></br>
                  <input
                    type="text"
                    placeholder="Password"
                    id="example2"
                    className="form-control form-control-md"
                  />{" "}
                  <br></br>
                  <input
                    type="text"
                    placeholder="Password"
                    id="example2"
                    className="form-control form-control-md"
                  />
                </div>{" "}
                <br></br>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
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
