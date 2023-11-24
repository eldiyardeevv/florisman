import axios from "axios";
import React, { createContext, useContext } from "react";
import { API_PRODUCTS } from "./../const";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const ProductContext = ({ children }) => {
  async function createProduct(newProduct) {
    try {
      await axios.post(API_PRODUCTS, newProduct);
    } catch (error) {
      console.log("error");
    }
  }

  const values = {
    createProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
