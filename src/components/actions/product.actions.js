import {
    productTypes
  } from '../../types/product.types';
  import Axios from "axios";
  
  
  export const productsActions = {
    getallproduct,
  
  };
  
  function getallproduct() {
    return dispatch => {
      dispatch(request());
      Axios.get("http://localhost:2000/product/getall").then(
        res => {
      
          if(res.data.products.length>0){
            dispatch(success(res.data.products));
          }
         else{
          dispatch(failure("no data found"));
         }
        },
        error => {
        
            dispatch(failure(error));
  
        });
       
    };
  
    function request() {
      return {
        type: productTypes.GETALL_REQUEST,
        
      }
    }
  
    function success(products) {
      return {
        type: productTypes.GETALL_SUCCESS,
        products
      }
    }
  
    function failure(error) {
      return {
        type: productTypes.GETALL_FAILURE,
        error
      }
    }
  }
  
