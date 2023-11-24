import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import BecentCh from "../Home/BecentCh/BecentCh";

const ListProduct = () => {
  const { getProduct, addProduct } = useProducts();
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="bg-[#FCEFE4]">
      <div className="flex flex-wrap gap-[50px] ml-[90px]  bg-[#FCEFE4]">
        {addProduct.map((el) => (
          <>
            <BecentCh el={el} />
          </>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
