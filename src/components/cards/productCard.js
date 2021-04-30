import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBBtn } from "mdbreact";
import Axios from "axios";
import ReactStars from "react-rating-stars-component";
export class ProductCard extends Component {
  state = {
    product: {},
  };
  componentDidMount() {
    Axios.get("http://localhost:2000/product/" + this.props.match.params.id).then((res) => {
      this.setState({ product: res.data.product[0] });
    });
  }
  render() {
    console.log(this.state.product);
    return (
      <section className="index_geuss pl-4 pr-4">
        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid  m-0"
              src="https://cdn.shopify.com/s/files/1/0047/6197/6945/products/Pochette_carton_600x.jpg?v=1539347666"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <h2 className="h1-responsive font-weight-bold  mb-2">
              {this.state.product.title}{" "}
              <ReactStars
                value={this.state.product.rating / 10}
                count={5}
                edit={false}
                isHalf={true}
                size={20}
                activeColor="#ffd700"
              />
            </h2>
            <hr></hr>{" "}
            <MDBRow>
              <MDBCol lg="7">
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="green-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Maison d'édition</h5>
                    <p className="grey-text">{this.state.product.media_home}</p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="green-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Etat de pochette</h5>
                    <p className="grey-text">
                      {this.state.product.sleeve_condition}
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="green-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Etat de produit</h5>
                    <p className="grey-text">
                      {this.state.product.media_condition}
                    </p>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="green-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Artiste</h5>
                    <h6 className="grey-text">{this.state.product.artiste}</h6>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="green-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Genre</h5>
                    <h6 className="grey-text">{this.state.product.genre}</h6>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-3">
                  <MDBCol size="1">
                    <MDBIcon icon="share" size="lg" className="green-text" />
                  </MDBCol>
                  <MDBCol xl="10" md="11" size="10">
                    <h5 className="font-weight-bold mb-3">Type </h5>
                    <h6 className="grey-text">{this.state.product.type}</h6>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol lg="4">
                <MDBCardTitle tag="h2" className="text-center mb-5  ">
                  <h2 className="h4-responsive font-weight-bold text-center text-danger">
                    Remise{" "}
                    {Math.trunc(
                      (Number(
                        this.state.product.first_price -
                          this.state.product.promo_price
                      ) /
                        this.state.product.first_price) *
                        100
                    )}
                    %
                  </h2>
                </MDBCardTitle>
                <MDBRow>
                  <MDBCol>
                    <h5 className="font-weight-bold mb-3">Prix</h5>
                    <MDBCardTitle tag="h1">
                      <h2 className="h1-responsive font-weight-bold   ">
                        <strike className="">
                          {" "}
                          {this.state.product.first_price}
                        </strike>
                      </h2>
                    </MDBCardTitle>
                  </MDBCol>
                  <MDBCol>
                    <h5 className="font-weight-bold mb-3 text-right">
                      Prix remise
                    </h5>

                    <MDBCardTitle tag="h1" className="text-center  ">
                      <h2 className="h1-responsive font-weight-bold text-right">
                        {this.state.product.promo_price}
                      </h2>
                    </MDBCardTitle>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBBtn
                    color="success"
                    className=" z-depth-0  mt-5 rounded-0 w-100"
                  >
                    <h4>Ajouter au panier</h4>
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
