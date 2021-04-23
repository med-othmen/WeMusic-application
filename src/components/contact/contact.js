import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBContainer,
  MDBAlert,
  MDBCardTitle,
} from "mdbreact";
import "./contact.css";
const ContactPage = () => {
  return (
    <section className="bg-light ml-1 mr-1">
      <MDBContainer>
        <MDBRow>
          <MDBCol lg="6" className="p-3">
            <h2 className="h1-responsive text-dark font-weight-bold my-2">
              A PROPOS
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className=" mt-5">
              <h2 className="h5-responsive text-dark font-weight-bold my-2">
                Suivez nous
              </h2>
              <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
              <img src="https://img.icons8.com/color/48/000000/youtube-music.png" />
              <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
            </div>
            <div
            id="map-container"
            className="rounded map-container z-depth-0 mt-4  "
            style={{ height: "230px" }}
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
          </MDBCol>
          <MDBCol lg="6" className="p-3 border-left border-white">
            <h3 className="h1-responsive text-dark font-weight-bold my-2">
              CONACT
            </h3>{" "}
            <p className="text-dark h-responsive ">
              Grace à ce formulaire, envoyer-nous directement un email, on vous
              contacte en retour dés que possible.<br></br>
              LEs champs marqués (*) sont obligatoires
            </p>
            <MDBCardBody>
              <div>
                <div className="form-group">
                  <input
                    type="text"
                    id="example2"
                    placeholder="Nom*"
                    className="form-control form-control-md rounded-0"
                  />
                  <br></br>
                  <input
                    type="text"
                    placeholder="E-mail*"
                    id="example2"
                    className="form-control form-control-md rounded-0"
                  />{" "}
                  <br></br>
                  <input
                    type="text"
                    placeholder="Sujet*"
                    id="example2"
                    className="form-control form-control-md rounded-0"
                  />
                </div>{" "}
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  placeholder="Votre message*"
                />
              </div>
              <div className="text-center success-text mt-3 m-0 ">
                <MDBBtn
                  color="success"
                  className="z-depth-0 w-responsive rounded-0  w-100"
                >
                  Envoyer
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ContactPage;

/*


  <MDBCardTitle tag="h2" className="text-center">
        <h2 className="h1-responsive font-weight-bold my-2 text-center">
          CONTACT
        </h2>
      </MDBCardTitle>
      <MDBRow>
        <MDBCol lg="6" className="bg-dark">
          <div
            id="map-container"
            className="rounded map-container z-depth-0 mt-4  "
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
        </MDBCol>
        <MDBCol lg="6" className="bg-white">
          <MDBCard className="z-depth-0 ">
            <MDBCardBody>
              <div>
                <div className="form-group ">
                  <input
                    type="text"
                    id="example2"
                    placeholder="Nom"
                    className="form-control form-control-md"
                  />
                  <br></br>
                  <input
                    type="text"
                    placeholder="E-mail"
                    id="example2"
                    className="form-control form-control-md"
                  />{" "}
                  <br></br>
                  <input
                    type="text"
                    placeholder="Sujet"
                    id="example2"
                    className="form-control form-control-md"
                  />
                </div>{" "}
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Votre message"
                />
              </div>
              <br></br>
              <div className="text-center success-text  ">
                <MDBBtn color="dark" className="z-depth-0 w-responsive  w-100">
                  Envoyer
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    

      */
