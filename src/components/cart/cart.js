import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCardFooter,
  MDBBtn,
  MDBCardTitle,
} from "mdbreact";
import { cartActions } from "../actions/cart.actions";

export class Cart extends Component {
  render() {
    return (
      <MDBContainer className="index_geuss">
        <MDBCardTitle tag="h2">Mon panier</MDBCardTitle>
        <hr></hr>
        <MDBRow>
          <MDBCol md="8">
            {this.props.cart.map((el, index) => (
              <MDBRow className=" mt-1 mb-5">
                <MDBCol md="3">
                  <img
                     src="https://cdn.shopify.com/s/files/1/0047/6197/6945/products/Pochette_carton_600x.jpg?v=1539347666"
                    className="img-fluid p-"
                    width="150px"
                    alt=""
                  />
                </MDBCol>
                <MDBCol md="6">
                  <h6 className="font-weight-bold">{el.product.title} </h6>
                  <p>{el.product.media_home}</p>

                  <span className="font-weight-bold">
                    {el.product.first_price}$
                  </span>

                  <p>{el.product.type}</p>
                  <p>{el.product.genre}</p>
                </MDBCol>
                <MDBCol md="2">
                  <div>
                    <select
                      className="browser-default custom-select"
                      onChange={(e) => {
                        this.props.update({
                          id: el.id,
                          quantity: e.target.value,
                          price: el.product.first_price,
                        });
                      }}
                    >
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                      <option value="4"> 4</option>
                      <option value="5"> 5</option>
                      <option value="6"> 6</option>
                      <option value="7"> 7</option>
                      <option value="8"> 8</option>
                      <option value="9"> 9</option>
                      <option value="10"> 10</option>
                    </select>
                  </div>
                  <div className="text-right mt-5">
                    <h5>
                      Total : <strong>{el.total}$</strong>{" "}
                    </h5>
                  </div>
                  <MDBBtn
                    className=" text-muted text-danger text-right z-depth-0 w-100 p-2  h-50"
                    color=""
                    outline
                    onClick={() => this.props.delete(el.product.id)}
                  >
                    Supprimer
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            ))}
          </MDBCol>
          <MDBCol md="4">
                <div className=" text-dark">
                  <h3 className=""> Récapitulatif</h3>{" "}
                  <span className="text-muted">
                    ({this.props.cart.length} &nbsp;article)
                  </span>
                </div>{" "}
                  <div className="d-flex justify-content-between">
                    <div className="p-2 col-example">
                      <h4 className="h6-responsive font-weight-bold text-left">
                        Total
                      </h4>
                    </div>
                    <div className="p-2 col-example">
                      <MDBCardTitle tag="H4">
                        <h2 className="h5-responsive font-weight-bold text-right">
                          {this.props.totalPrice}$
                        </h2>
                      </MDBCardTitle>
                    </div>
                  </div>
                <img
                  src="https://files.bs-motoparts.eu/shopprojekt/zahlarten-kreditkarten-frankreich.png"
                  className="img-fluid"
                  alt="paiement method"
                />
                <MDBCardFooter className="text-white bg-white rounded-0 text-center mt-0 font-weight-bold border-0 ">
                  <MDBBtn
                    color=""
                    className="border-0 z-depth-0  w-100 bg-success"
                  >
                    PAIEMENT
                  </MDBBtn>
                </MDBCardFooter>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => {
  let totalPrice = 0;
  state.cart.map((item) => {
    totalPrice += item.total;
  });
  return {
    cart: state.cart,
    totalPrice: totalPrice,
    user: state.authentication.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  delete: (id) => dispatch(cartActions.delete_from_cart(id)),
  update: (data) => dispatch(cartActions.update_in_cart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
