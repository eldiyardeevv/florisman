import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTION_PRODUCT, API_PRODUCTS } from "./../const";

const INITSTATE = {
  addProduct: [],
};

const reducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case ACTION_PRODUCT.GET_PRODUCT: {
      return { ...state, addProduct: action.payload.data };
    }
    default:
      return state;
  }
};
const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITSTATE);

  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.log("error");
    }
  }

  async function getProduct() {
    try {
      let res = await axios(API_PRODUCTS);
      dispatch({ type: ACTION_PRODUCT.GET_PRODUCT, payload: res });
    } catch (error) {
      console.log("error");
    }
  }
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API_PRODUCTS}/${id}`);
      getProduct();
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    createProduct,
    getProduct,
    deleteProduct,
    addProduct: state.addProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
