import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  image: "",
};

const From = ({ isEdit }) => {
  const { createProduct, oneProduct, getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
  const [product, setProduct] = useState(init);

  function hendleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }
  // function saveEditProduct() {
  //   for (let key in oneProduct) {
  //     if (!oneProduct[key]) {
  //       console.log("error");
  //     }
  //   }
  //   edit
  // }
  return (
    <div>
      <div>
        <div className="form__block">
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="title"
            name="title"
            value={product.title}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="description"
            name="description"
            value={product.description}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="category"
            name="category"
            value={product.category}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="price"
            name="price"
            value={product.price}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="image"
            name="image"
            value={product.image}
          />
          {isEdit ? (
            <button
              onClick={addProduct}
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              ADD
            </button>
          ) : (
            <NavLink to={"/"}>
              <button class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                SAVE
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default From;
