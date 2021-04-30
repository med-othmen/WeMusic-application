import { cartTypes } from "../../types/cart.types";
import { toast } from "react-toastify";
export const cartActions = {
  getall_from_cart,
  add_to_cart,
  delete_from_cart,
  update_in_cart,
};

// get all products from cart
function getall_from_cart(cart) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(cart));
    if (!cart) {
      failure("erreur request database");
    }
  };
  function request() {
    return { type: cartTypes.CART_UPDATE_REQUEST };
  }
  function success(cart) {
    return { type: cartTypes.GETALL_CART_SUCCESS, cart };
  }
  function failure(error) {
    return { type: cartTypes.GETALL_CART_FAILURE, error };
  }
}

//add product to cart
function add_to_cart(product) {
  return (dispatch) => {
    
    dispatch(request());
    if (product !== null) dispatch(success(product));
    else dispatch(failure("error"));
  };

  function request() {
    return { type: cartTypes.ADD_CART_REQUEST };
  }
  function success(product) {
    toast.success('Produit ajouter au panier', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return { type: cartTypes.ADD_CART_SUCCESS, product };
  }
  function failure(error) {
    return { type: cartTypes.ADD_CART_FAILURE, error };
  }
  
}
//delete product from cart
function delete_from_cart(id) {
  return (dispatch) => {
    console.log(id);
    dispatch(request());
    if (id !== null) dispatch(success(id));
    else dispatch(failure("error"));
  };
  function request() {
    return { type: cartTypes.DELETE_FROM_CART_REQUEST };
  }
  function success(id) {
    toast.warn('Produit supprimer de panier', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    return { type: cartTypes.DELETE_FROM_CART_SUCCESS, id };
  }
  function failure(error) {
    return { type: cartTypes.DELETE_FROM_CART_FAILURE, error };
  }

}
//update quanitity of product in cart
function update_in_cart(data) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(data));
  };
  function request() {
    return { type: cartTypes.CART_UPDATE_REQUEST };
  }
  function success(data) {
    return { type: cartTypes.CART_UPDATE_SUCCESS, data };
  }
}
