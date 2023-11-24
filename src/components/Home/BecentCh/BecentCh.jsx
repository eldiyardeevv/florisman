import React from "react";
import { SlBasket } from "react-icons/sl";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useProducts } from "../../../context/ProductContext";

const BecentCh = ({ el }) => {
  const { deleteProduct } = useProducts();
  return (
    <>
      <div className="max-w-sm w-[300px]  h-[450px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-[240px] " src={el.image} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <h4> {el.title}</h4>
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {el.description.slice(0, 15)}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {el.category.slice(0, 10)}
            </p>
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {el.price}$
          </p>
          <div className="ml-[70px] flex">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <SlBasket />
            </button>
            <button
              onClick={() => deleteProduct(el.id)}
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <MdOutlineDeleteOutline />
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecentCh;
