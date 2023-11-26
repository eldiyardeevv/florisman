import React, { useEffect } from "react";
import imgbg from "../../img/image-bg.png";
import { useProducts } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
const AddBasket = () => {
  const { oneProduct, getOneProduct, productsTotalCount } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(productsTotalCount);
  return (
    <>
      <div id="basket">
        <div className="basket">
          <img className="basket__img" src={imgbg} alt="img" />
          <h1 className="basket__img__h1">Карзинка...</h1>
        </div>
      </div>
      <div className="basket__card">
        <img src={oneProduct.image} alt="" />
        <div>
          <h2 className="basket__card__text">{oneProduct.title}</h2>
          <p className="basket__card__text__p">{oneProduct.description}</p>
          <p className="basket__card__text__p__p1">{oneProduct.category}</p>
          <h2>{oneProduct.productsTotalCount}</h2>
          <p className="basket__card__text__p__p1__p2">{oneProduct.price}$</p>
          <button>delete</button>
        </div>
      </div>
    </>
  );
};

export default AddBasket;
