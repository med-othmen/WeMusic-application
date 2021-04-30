import React, { Component } from "react";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBTooltip,
} from "mdbreact";

export class Filtrebar extends Component {
  state = {
    cartadd: false,
    sleeve_condition: "",
    artiste: "",
    type: "",
    genre: "",
    title: "",
    rating: "",
    posts: [],
    loading: false,
    currentPage: 1,
    postsperPage: 10,
  };

  render() {
    return (
      <div className="d-flex  flex-wrap justify-content-center border ">
        {this.props.products
          .filter((el) =>
            this.state.artiste === "" ? el : el.artiste === this.state.artiste
          )
          .filter((el) =>
            this.state.rating === ""
              ? el
              : el.rating >= Number(this.state.rating) * 10
          )
          .filter((el) =>
            this.state.genre === "" ? el : el.genre === this.state.genre
          )
          .filter((el) =>
            this.state.type === "" ? el : el.type === this.state.type
          )
          .filter((el) =>
            this.state.sleeve_condition === ""
              ? el
              : el.sleeve_condition === this.state.sleeve_condition
          )
          .filter((el) =>
            this.state.title === "" ? el : el.title.includes(this.state.title)
          )
          .map((el, index) => (
            <div className="float-center">
              <MDBCard
                minHeight
                className="m-2"
                style={{
                  maxWidth: "18rem",
                  minHeight: "370px",
                }}
              >
                <MDBCardImage
                  top
                  src="https://cdn.shopify.com/s/files/1/0047/6197/6945/products/Pochette_carton_600x.jpg?v=1539347666"
                  alt="produit"
                />

                <MDBCardBody cascade>
                  <MDBBadge pill color="danger" className="p-3 mb-2 ">
                    -
                    {Math.trunc(
                      (Number(el.first_price - el.promo_price) /
                        el.first_price) *
                        100
                    )}
                    %
                  </MDBBadge>

                  <br></br>

                  <p className="blue-text " style={{ minHeight: "40px" }}>
                    <span className="text-muted grey-text"> Vendu par </span>{" "}
                    {el.media_home}
                  </p>

                  <MDBCardTitle>
                    <strong>
                      <p
                        className="text-center   "
                        style={{ minHeight: "60px" }}
                      >
                        {el.title}{" "}
                      </p>
                    </strong>
                    <div>
                      <span className="float-left">
                        {" "}
                        <ReactStars
                          value={el.rating / 10}
                          count={5}
                          edit={false}
                          isHalf={true}
                          size={20}
                          activeColor="#ffd700"
                        />{" "}
                      </span>{" "}
                      <span className="float-right">
                        <small className="grey-text">{el.rating}</small>
                      </span>
                    </div>
                    <br></br>
                  </MDBCardTitle>

                  <span className="float-left"> {el.first_price}$</span>
                  <span className="float-right">
                    <MDBTooltip domElement placement="top">
                      <Link to={"/product/" + el.id}>
                        <i className="grey-text fa fa-eye fa-2x mr-4" />
                      </Link>
                      <h6 className="p-2">Voir le produit</h6>
                    </MDBTooltip>

                    {!el.like ? (
                      <MDBTooltip domElement placement="top">
                        <i
                          className="grey-text fa fa-heart fa-2x mr-4 "
                          onClick={() => {
                            this.props.rate({
                              id: el.id,
                              rating: el.rating + 1,
                              like: true,
                            });
                          }}
                        />
                        <h6 className="p-2">J'aime</h6>
                      </MDBTooltip>
                    ) : (
                      <MDBTooltip domElement placement="top">
                        <i
                          className="grey-text fa fa-heart text-danger fa-2x mr-4 "
                          onClick={() => {
                            this.props.rate({
                              id: el.id,
                              rating: el.rating - 1,
                              like: false,
                            });
                          }}
                        />
                        <h6 className="p-2">J'aime pas</h6>
                      </MDBTooltip>
                    )}

                    {this.props.cart.filter((er) => er.product.id === el.id)
                      .length !== 0 ? (
                      <MDBTooltip domElement placement="top">
                        <i
                          onClick={() => this.props.delete(el.id)}
                          className="grey-text fa fa-times-circle text-danger fa-2x "
                        />

                        <h6 className="p-2">Enléver de panier</h6>
                      </MDBTooltip>
                    ) : (
                      <MDBTooltip domElement placement="top">
                        <i
                          onClick={() =>
                            this.props.addToCard({
                              id: index,
                              product: el,
                              quantity: 1,
                              total: el.promo_price,
                            })
                          }
                          className="grey-text fa fa-shopping-cart fa-2x "
                        />

                        <h6 className="p-2">Ajouter au panier</h6>
                      </MDBTooltip>
                    )}
                  </span>
                </MDBCardBody>
              </MDBCard>{" "}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.products,
  types: state.types,
  genres: state.genres,
  sleeve_conditions: state.sleeve_conditions,
  artistes: state.artistes,
});

const mapDispatchToProps = (dispatch) => ({
  addToCard: (product) => dispatch(cartActions.add_to_cart(product)),
  getallProducts: () => dispatch(productsActions.getallproduct()),
  delete: (id) => dispatch(cartActions.delete_from_cart(id)),
  rate: (data) => dispatch(productsActions.update_product(data)),
});
