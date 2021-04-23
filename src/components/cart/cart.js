import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBContainer, MDBCardFooter, MDBBtn } from "mdbreact";
import { cartActions } from "../actions/cart.actions";
let total = 0;
export class Cart extends Component {
  state = {
    total: [],
  };
  componentDidMount() {
    this.props.cart.map((el) =>
      this.state.total.push({ id: el.id, total: el.total })
    );
  }
  render() {
  
    return (
      
      <MDBContainer className="index_geuss">
            <h3 className="h1-responsive font-weight-bold  ">
                  Panier
                </h3>  <a className="text-muted">
                ({this.props.cart.length} &nbsp;article)
              </a>
            
        <MDBRow>
          <MDBCol md="8" className="p-0">
         
            {this.props.cart.map((el, index) => (
              <MDBRow className=" mt-1 mb-5" >
                {el.id}
                <MDBCol md='3'>
                  <img
                    src="https://www.cdiscount.com/pdt2/7/6/2/1/550x550/umi8786137531762/rw/umidigi-a9pro-4g-smartphone-6-3-4go-64go.jpg"
                    className="img-fluid p-"
                    width="120px"
                    alt=""
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <h6 className="font-weight-bold">{el.product.title} </h6>
                  <p>{el.product.media_home}</p>
                  <p>{el.product.artiste}</p>
                  <span className="font-weight-bold">
                    {el.product.first_price}$
                  </span>
                  <p>{el.product.description}</p>
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
                        this.state.total.map((item, index) => {
                          // Find the item with the matching id
                          if (item.id === el.id) {
                            // Return a new object
                            return {
                              ...item, // copy the existing item
                              total: el.product.first_price * e.target.value,
                            };
                          }
                          // Leave every other item unchanged
                          return item;
                        });
                      }}
                    >
                      <option>{el.quantity}</option>
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
                      {" "}
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
          <MDBCol md="4" className="  font-weight-bold ">
            <div className=" mt-5 ">
              <div >
                <div className=" text-dark p-1  ">
                  <h3 className="mt-1 "> Récapitulatif</h3>
                </div>{" "}
                <div className="h-5 ">
                  <div className="d-flex justify-content-between">
                    <div className="p-2 col-example text-left">
                      {" "}
                      <h5 className="text-monospace">Frais :</h5>
                    </div>
                    <div className="p-2 col-example text-left">
                      {" "}
                      <h5 className="text-monospace">0 $</h5>
                    </div>
                  </div>{" "}
                  <div className="d-flex justify-content-between">
                    <div className="p-2 col-example text-left">
                      {" "}
                      <h5 className="text-monospace">Total :</h5>
                    </div>
                    <div className="p-2 col-example text-left ">
                      {" "}
                      <h5 className="text-monospace">{total}$</h5>
                    </div>
                  </div>
                </div>{" "}
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
                    {" "}
                    PAIEMENT
                  </MDBBtn>
                </MDBCardFooter>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  delete: (id) => dispatch(cartActions.delete_from_cart(id)),
  update: (data) => dispatch(cartActions.update_in_cart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

/*
   <input
                    min="1"
                      defaultValue={el.quantity}
                      type="number"
                      name="quantity"
                      onChange={(e)=> {
                      let idprod=el.product.id;
                      this.props.update({
                        id:idprod,
                        quantity:e.currentTarget.value
                      })
                    
                    }}
                   
                      className="form-control w-25 float-right"
                    />
                    */
