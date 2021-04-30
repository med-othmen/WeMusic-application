import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBTooltip,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { cartActions } from "../actions/cart.actions";
import { productsActions } from "../actions/product.actions";
import ReactStars from "react-rating-stars-component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../pagination/pagination";
import "./secondmenu.css";

export class Filtrebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      postsperPage: 20,
    };
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.setState({ posts: this.props.products });
    this.setState({ loading: false });
  }
  paginate(pageNumber) {
    this.setState({ currentPage: pageNumber });
    console.log(pageNumber);
  }
  render() {
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsperPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsperPage;
    const currentPosts = this.state.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <MDBRow className="ml-3 mr-3">
        <MDBCol md="2" className="p-2 bg-light ">
          <div className=" pt-4">
            <div className="input-group  p-0 float-right ">
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
            <label className="mt-4 p-1">Moyenne des commentaires client</label>
            <select
              className=" custom-select  "
              onChange={(e) => this.setState({ rating: e.target.value })}
            >
              <option value=""> Tous </option>
              <option value="1"> 1 & plus</option>
              <option value="2"> 2 & plus</option>
              <option value="3"> 3 & plus </option>
              <option value="4"> 4 & plus</option>
            </select>

            <label className="mt-4 p-1">artiste</label>
            <select
              className=" custom-select  "
              onChange={(e) => this.setState({ artiste: e.target.value })}
            >
              <option value=""> Tous </option>

              {this.props.artistes.map((el) => (
                <option> {el.nom} </option>
              ))}
            </select>
            <label className="mt-4 p-1">Genre</label>
            <select
              onChange={(e) => this.setState({ genre: e.target.value })}
              className="  custom-select "
            >
              <option value="">Tous </option>
              {this.props.genres.map((el) => (
                <option> {el.libelle} </option>
              ))}
            </select>
            <label className="mt-4 p-1">Type</label>
            <select
              onChange={(e) => this.setState({ type: e.target.value })}
              className=" custom-select  "
            >
              <option value=""> Tous </option>
              {this.props.types.map((el) => (
                <option> {el.libelle} </option>
              ))}
            </select>
            <label className="mt-4 p-1">Etat de produit</label>
            <select
              onChange={(e) =>
                this.setState({ sleeve_condition: e.target.value })
              }
              className=" custom-select  "
            >
              <option value=""> Tous </option>
              {this.props.sleeve_conditions.map((el) => (
                <option> {el.libelle} </option>
              ))}
            </select>
          </div>
        </MDBCol>
        <ToastContainer autoClose={2000} />
        <MDBCol md="10" className="p-0">
          <Pagination
            postsPerPage={this.state.postsperPage}
            totalPosts={this.props.products.length}
            paginate={this.paginate}
            currentPage={this.state.currentPage}
          />
          {this.state.loading === true ? (
            <h1>loading ....</h1>
          ) : (
            <div className="d-flex  flex-wrap justify-content-center border ">
              {currentPosts
                .filter((el) =>
                  this.state.artiste === ""
                    ? el
                    : el.artiste === this.state.artiste
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
                  this.state.title === ""
                    ? el
                    : el.title
                        .toUpperCase()
                        .includes(this.state.title.toUpperCase())
                ).length === 0 ? (
                <h1 className="searchContainer">
                  Aucun produit disponible...{" "}
                </h1>
              ) : (
                currentPosts
                  .filter((el) =>
                    this.state.artiste === ""
                      ? el
                      : el.artiste === this.state.artiste
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
                    this.state.title === ""
                      ? el
                      : el.title
                          .toUpperCase()
                          .includes(this.state.title.toUpperCase())
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

                          <p
                            className="blue-text "
                            style={{ minHeight: "40px" }}
                          >
                            <span className="text-muted grey-text">
                              {" "}
                              Vendu par{" "}
                            </span>{" "}
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

                            {this.props.cart.filter(
                              (er) => er.product.id === el.id
                            ).length !== 0 ? (
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
                  ))
              )}
            </div>
          )}
          <Pagination
            postsPerPage={this.state.postsperPage}
            totalPosts={this.props.products.length}
            paginate={this.paginate}
            currentPage={this.state.currentPage}
          />
        </MDBCol>
      </MDBRow>
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

export default connect(mapStateToProps, mapDispatchToProps)(Filtrebar);
