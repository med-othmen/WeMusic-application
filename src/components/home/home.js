import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

//  Import Components
import Secondmenu from "./secondmenu";
import BlogCard from "../cards/blogCard";
import CarouselAlbum from "./caroselAlbum";
import Filtrebar from "./filtrebar";
let Arr = [1, 2, 3, 4, 5];
export class home extends Component {
  render() {
    return (
      <div className="ml-4 mr-4 ">
        <section>
          <Secondmenu />
        </section>
        <section>
          <MDBRow>
            <MDBCol md="8" className="border border-right-0 ">
              <div className="rounded p-1 text-dark mt-3 ">
                <h4 className="font-weight-bolder text-uppercase">
                  Dernières nouveautés en Albums <MDBIcon icon="fire" />{" "}
                  <MDBIcon icon="fire" />
                </h4>
                <span>
                  Nos meilleures ventes parmi les nouvelles et futures
                  publications. Mises à jour chaque jour.
                </span>
              </div>{" "}
              <CarouselAlbum />
              <div className="text-center ">
                <MDBBtn color="white" className="z-depth-0 p-1  ">
                  VOIR TOUTES LES NOUVEAUTÉS
                </MDBBtn>
              </div>
              <Filtrebar />{" "}
            </MDBCol>
            <MDBCol md="4" className="border  ">
              <div className="rounded p-1 text-center text-dark mt-3">
                <h4 className="font-weight-bolder">ACTUALITÉ</h4>
              </div>

              {Arr.map((el) => (
                <BlogCard />
              ))}
              <MDBRow>
                <MDBCol>
                  <MDBPagination className="mb-5">
                    <MDBPageItem disabled>
                      <MDBPageNav aria-label="Previous">
                        <span aria-hidden="true">Previous</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem active>
                      <MDBPageNav>
                        1 <span className="sr-only">(current)</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                      <MDBPageNav>2</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                      <MDBPageNav>3</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                      <MDBPageNav aria-label="Previous">
                        <span aria-hidden="true">Next</span>
                      </MDBPageNav>
                    </MDBPageItem>
                  </MDBPagination>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(home);
