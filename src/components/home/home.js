import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBIcon,
  MDBView,
  MDBBadge,
} from "mdbreact";

import Article_Section from "../article/article_sectionHome";
import Intro from "../intro/intro";

export class home extends Component {
  state = {
    data: [
      {
        tooltip: "Very Bad",
        choosed: true,
      },
      {
        tooltip: "Poor",
      },
      {
        tooltip: "Ok",
      },
      {
        tooltip: "Good",
      },
      {
        tooltip: "Excellent",
      },
    ],
  };
  render() {
    return (
      <div>
        <section>
          <Intro />
        </section>
        <section>
          <MDBCol>
            <MDBCardTitle tag="h1" className="text-center pt-3 ">
              <h2 className="h1-responsive font-weight-bold my-5 text-center">
                Nouveautés !
              </h2>
            </MDBCardTitle>
          </MDBCol>
          <MDBContainer>
            <MDBRow className="m-3 p-3">
              {this.props.products.slice(0, 4).map((el, index) => (
                <div>
                  <MDBBadge color="danger" className="p-4 tourne">
                   -{(Math.trunc(Number(el.first_price-el.promo_price)/el.first_price*100))}%
                  </MDBBadge>
                  <MDBCol
                    style={{
                      maxWidth: "20rem",
                    }}
                    className=""
                  >
                    <MDBCard
                      className="card-image "
                      style={{
                        backgroundSize: " cover",
                        backgroundImage:
                          "url('https://s.mxmcdn.net/site/images/album-placeholder.png')",
                      }}
                    >
                      <div className="text-white text-center d-flex align-items-center rgba-black-strong py-4 px-5">
                        <div>
                          <MDBCardTitle tag="h4">
                            <p
                              className="text-center "
                              style={{ minHeight: "110px" }}
                            >
                              {el.title}
                            </p>
                          </MDBCardTitle>
                          <p
                            className="text-center"
                            style={{ minHeight: "50px" }}
                          >
                            {el.type}
                          </p>
                          <h1 className="h1-responsive font-weight-bold text-white  ">
                            {el.first_price}$
                          </h1>
                        </div>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </div>
              ))}
            </MDBRow>
          </MDBContainer>
        </section>
        <section className="bd_blog pt-5"></section>
        <section className="bd_blog " style={{ paddingTop: "120px" }}>
          <MDBCol className="bg-white">
            <MDBCardTitle tag="h2" className="text-center pt-3 ">
              <p className="h1-responsive font-weight-bold my-5 text-center">
                Actualité
              </p>
            </MDBCardTitle>
            <Article_Section />
          </MDBCol>
        </section>
        <hr></hr>
        <div className="d-flex justify-content-around bg-white p-0">
          <div className="p-2 col-example text-left" lg="4" md="12">
            <MDBView className="overlay  z-depth-0 text-center p-4" waves>
            <img src="https://img.icons8.com/fluent/48/000000/mastercard-credit-card.png" className="p-5"/>
              <p className="h6-responsive">Paiement sécurisé</p>
            </MDBView>
          </div>
          <div className="p-2 col-example text-left" lg="4" md="12">
            <MDBView className="overlay  z-depth-0 text-center p-4" waves>
            <img src="https://img.icons8.com/flat-round/64/000000/good-quality--v1.png" className="p-5"/>
            
              <p className="h6-responsive">Rapide et efficace</p>
            </MDBView>
          </div>{" "}
          <div className="p-2 col-example text-left" lg="4" md="12">
            <MDBView className="overlay  z-depth-0 text-center p-4" waves>
            <img src="https://img.icons8.com/fluent/48/000000/lock.png" className="p-5"/>
              <p className="h6-responsive">Protége de données</p>
            </MDBView>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles,
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(home);
