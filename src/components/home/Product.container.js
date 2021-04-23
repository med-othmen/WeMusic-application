import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCardFooter,
  MDBRating,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNav,
  MDBContainer,
  MDBRow,
  MDBBadge,
  MDBTooltip,
  MDBIcon,
} from "mdbreact";
import { cartActions } from "../actions/cart.actions";
import { productsActions } from "../actions/product.actions";
import "./secondmenu.css";

export class Filtrebar extends Component {
  state = {
    cartadd: false,
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
    sleeve_condition: "",
    artiste: "",
    type: "",
    genre: "",
    title: "",
  };
  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="registresurface ">
        <div className="d-flex justify-content-around  bg-light flex-wrap">
          <div className="m-0">
            <select
              className="m-2  custom-select bg-light border-0"
              onChange={(e) => this.setState({ artiste: e.target.value })}
            >
              <option value=""> artiste </option>

              {this.props.artistes.map((el) => (
                <option> {el.nom} </option>
              ))}
            </select>
          </div>{" "}
          <div className="m-0">
            <select
              onChange={(e) => this.setState({ genres: e.target.value })}
              className="m-2  custom-select bg-light border-0"
            >
              <option value="ff"> Genre</option>
              {this.props.genres.map((el) => (
                <option> {el.libelle} </option>
              ))}
            </select>
          </div>{" "}
          <div className="m-0">
            <select
              onChange={(e) => this.setState({ type: e.target.value })}
              className="m-2  custom-select bg-light border-0"
            >
              <option value=""> Type </option>
              {this.props.types.map((el) => (
                <option> {el.libelle} </option>
              ))}
            </select>
          </div>{" "}
          <div className="m-0">
            <select
              onChange={(e) =>
                this.setState({ sleeve_condition: e.target.value })
              }
              className="m-2  custom-select bg-light border-0"
            >
              <option value=""> Etat de produit </option>
              {this.props.sleeve_conditions.map((el) => (
                <option> {el.libelle} </option>
              ))}
            </select>
          </div>{" "}
          <div className="m-0">
            <div className="input-group  p-2 ">
              <input
                onChange={(e) => this.setState({ title: e.target.value })}
                type="text"
                className="form-control rounded-left   "
                placeholder="rechercher un artiste, un album, un titre"
                aria-label="Username"
                aria-describedby="basic-addon"
              />
              <div className="input-group-prepend ">
                <span
                  className="input-group-text  bg-success border-0 rounded-right"
                  id="basic-addon"
                >
                  <i className="fa fa-search prefix "></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center ">
          {this.props.products
            .filter((el) =>
              this.state.artiste === "" ? el : el.artiste === this.state.artiste
            )
            .filter((el) =>
              this.state.genre === "" ? el : el.genre === this.state.genre
            )
            .filter((el) =>
              this.state.type === "" ? el : el.type === this.state.type
            ).filter((el) =>
            this.state.sleeve_condition === "" ? el : el.sleeve_condition === this.state.sleeve_condition
          ).filter((el) =>
          this.state.title === "" ? el : el.title.includes(this.state.title)
        )
            .map((el, index) => (
              <div className="float-center">
                <MDBCard
                  className="m-3 border "
                  style={{
                    maxWidth: "20rem",
                  }}
                >
                  <MDBCardImage
                    cascade
                    top
                    src="http://yard.media/wp-content/uploads/2016/02/808sHeartbreak.jpg"
                    alt="produit"
                  />

                  <MDBCardBody cascade>
                    <MDBBadge pill color="danger" className="p-3 mb-3">
                      -{" "}
                      {Math.trunc(
                        (Number(el.first_price - el.promo_price) /
                          el.first_price) *
                          100
                      )}{" "}
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
                      <div className="">
                        <MDBRating data={this.state.data} />
                      </div>
                    </MDBCardTitle>
                    <MDBCardText style={{ minHeight: "30px" }}>
                      {el.description}
                    </MDBCardText>
                    <span className="float-left"> {el.first_price}$</span>
                    <span className="float-right">
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-eye fa-2x mr-3" />
                        <h5 className="p-1">Voir le produit</h5>
                      </MDBTooltip>
                      <MDBTooltip domElement placement="top">
                        <i className="grey-text fa fa-heart fa-2x mr-3 " />
                        <h6 className="p-2">Ajouter au panier</h6>
                      </MDBTooltip>
                      {this.props.cart.filter((er) => er.product.id === el.id)
                        .length !== 0 ? (
                        <MDBTooltip domElement placement="top">
                          <i
                            onClick={() => this.props.delete(el.id)}
                            className="grey-text fa fa-times-circle text-danger fa-2x "
                          />

                          <h6 className="p-2">Supprimer au panier</h6>
                        </MDBTooltip>
                      ) : (
                        <MDBTooltip domElement placement="top">
                          <i
                            onClick={() =>
                              this.props.addToCard({
                                id: index,
                                product: el,
                                quantity: 1,
                                total: el.first_price,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Filtrebar);

/*
 style={{
                maxWidth: "20rem",
              }}
         <MDBCard>
                  <MDBCardBody>
                 
                    <p
                      className="text-center pt-3  "
                      style={{ minHeight: "60px" }}
                    >
                      {el.title}{" "}
                    </p>
                    <MDBCardText>
                      Vendu par{" "}
                      <p className="blue-text " style={{ minHeight: "30px" }}>
                        {el.media_home}
                      </p>{" "}
                    </MDBCardText>{" "}
                    <div className="mw-100">
                      <h4 className="font-weight-bold text-center">
                        {el.first_price}$
                      </h4>
                      <p className="text-left text-danger  text-center">
                        Promo prix :{el.promo_price}$
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter className="p-0 border-0">
                    <div className="border-top border-bottom">
                      <MDBRating data={this.state.data} />
                    </div>
                    <div>
                      {this.props.cart.filter((er) => er.product.id === el.id)
                        .length !== 0 ? (
                        <MDBBtn
                          outline
                          color=""
                          onClick={() => this.props.delete(el.id)}
                          className=" w-100 z-depth-0  text-danger  font-weight-bold "
                        >
                          Enlever de panier
                        </MDBBtn>
                      ) : (
                        <MDBBtn
                          onClick={() =>
                            this.props.addToCard({
                              id: index,
                              product: el,
                              quantity: 1,
                              total: el.first_price,
                            })
                          }
                          color="success"
                          className=" w-100 m-0  z-depth-0  text-dark  font-weight-bold "
                        >
                          Ajouter au panier
                        </MDBBtn>
                      )}
                    </div>
                  </MDBCardFooter>{" "}
                </MDBCard>{" "}
            
              */
