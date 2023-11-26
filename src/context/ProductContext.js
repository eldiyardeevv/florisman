import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { ACTION_PRODUCT, API_PRODUCTS } from "./../const";

const INITSTATE = {
  addProduct: [],
  oneProduct: null,
  productsTotalCount: 10,
};

const reducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case ACTION_PRODUCT.GET_PRODUCT: {
      return {
        ...state,
        addProduct: action.payload.data,
        productsTotalCount: action.payload.headers["x-total-count"],
      };
    }
    case ACTION_PRODUCT.GET_ONE_PRODUCT: {
      return { ...state, oneProduct: action.payload };
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

  async function getOneProduct(id) {
    try {
      let { data } = await axios(`${API_PRODUCTS}/${id}`);
      dispatch({ type: ACTION_PRODUCT.GET_ONE_PRODUCT, payload: data });
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
  // async function editProduct(newProduct) {
  //   try {
  //     await axios.patch(`${API_PRODUCTS}/${id}`, newProduct);
  //     getProduct();
  //   } catch (error) {
  //     console.log("error");
  //   }
  // }

  const values = {
    createProduct,
    getProduct,
    deleteProduct,
    getOneProduct,
    addProduct: state.addProduct,
    oneProduct: state.oneProduct,
    productsTotalCount: state.productsTotalCount,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
