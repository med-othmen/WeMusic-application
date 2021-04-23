import { productTypes } from "../types/product.types";
const initialState = [];

export default function PRODUCTsReducers(state = initialState, action) {
  if (action.type === productTypes.GETALL_SUCCESS) {
    return action.products;
  }
 

  return state;
}
