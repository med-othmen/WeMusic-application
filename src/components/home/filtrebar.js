import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCardFooter,
} from "mdbreact";
let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10];
export class Filtrebar extends Component {
  render() {
    return (
      <div>
        <section>
          <MDBRow className=" searchbar">
            <MDBCol>
              <div>
                <select className="m-1 p-1 border-0 searchbar  mt-2 text-white ">
                  <option>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </MDBCol>
            <MDBCol>
              <div>
                <select className="m-1 p-1 border-0 searchbar   mt-2 text-white ">
                  <option>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </MDBCol>
            <MDBCol>
              <div>
                <select className="m-1 p-1 border-0 searchbar  mt-2 text-white ">
                  <option>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </MDBCol>{" "}
            <MDBCol>
              <div>
                <select className="m-1 p-1 border-0 searchbar mt-2 text-white ">
                  <option>Choose your option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </MDBCol>{" "}
            <MDBCol className="border-0 bg-warning text-center">
              <div>
                <MDBBtn
                  outline
                  color=""
                  className="text-white m-0 z-depth-0 border-0 "
                >
                  <MDBIcon icon="arrow-circle-right" size="2x" className="" />
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </section>{" "}
        <section>
          <MDBCardGroup>
            {Arr.map((el) => (
              <MDBCol style={{ maxWidth: "12rem" }} className="p-2 ">
                <MDBCard className="z-depth-0 border-0">
                  <MDBCardBody>
                    <MDBCardImage
                      className="img-fluid "
                      src="https://www.webassoc.org/wp-content/uploads/2018/11/youtube.png"
                      waves
                    />
                    <MDBCardTitle>Special title treatment</MDBCardTitle>
                    <MDBCardText>
                      With supporting text below as
                    </MDBCardText>{" "}
                    <div className=" font-weight-bold">
                      {" "}
                      <span>30 $</span>
                      <MDBIcon
                        icon="heart float-right text-light"
                        size="2x"
                        className=""
                      />
                    </div>
                    <small>Etat de produit</small>
                  </MDBCardBody>
                  <MDBCardFooter
                    color="dark-color"
                    className="text-white rounded-0 text-center bg-dark font-weight-bold border-dark"
                  >
                    Ajouter au panier
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBCardGroup>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Filtrebar);
