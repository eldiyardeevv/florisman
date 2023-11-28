import React, { useEffect, useState } from "react";
import imgbg from "../../img/image-bg.png";
import { useProducts } from "../../context/ProductContext";

import { useParams } from "react-router-dom";
const AddBasket = () => {
  const { oneProduct, getOneProduct } = useProducts();
  const { id } = useParams();
  const [state, setState] = useState(1);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <>
      <div id="basket">
        <div className="basket">
          <img className="basket__img" src={imgbg} alt="img" />
          <h1 className="basket__img__h1">Карзинка...</h1>
        </div>
        <div className="basket__card">
          <img src={oneProduct.image} alt="" />
          <div className="basket__card__block">
            <h2 className="basket__card__block__text">{oneProduct.title}</h2>
            <p>{oneProduct.description}</p>
            <p>{oneProduct.category}</p>
            <p className="basket__card__block__text__p1">{oneProduct.price}$</p>
          </div>
          <div className="basket__btn">
            <button
              onClick={() => setState(state + 1)}
              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              +
            </button>
            <h2>{state}</h2>
            <button
              onClick={() => setState(state > 1 ? state - 1 : state)}
              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              -
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
              >
                <path
                  d="M22.6346 4.41688C22.3678 4.41347 22.1042 4.47453 21.8661 4.59489C21.628 4.71524 21.4225 4.89132 21.2671 5.10815C21.1117 5.32498 21.0109 5.57615 20.9734 5.84028C20.9359 6.10441 20.9628 6.37369 21.0517 6.62522H16.1649C14.1288 6.62522 12.2405 7.63687 11.112 9.32956L8.49824 13.2502H8.28043C8.06095 13.2471 7.84305 13.2877 7.63939 13.3695C7.43572 13.4513 7.25035 13.5728 7.09405 13.727C6.93775 13.8811 6.81364 14.0647 6.72892 14.2672C6.64421 14.4697 6.60059 14.687 6.60059 14.9065C6.60059 15.126 6.64421 15.3433 6.72892 15.5458C6.81364 15.7482 6.93775 15.9319 7.09405 16.086C7.25035 16.2401 7.43572 16.3616 7.63939 16.4434C7.84305 16.5253 8.06095 16.5658 8.28043 16.5627H44.7179C44.9374 16.5658 45.1553 16.5253 45.359 16.4434C45.5626 16.3616 45.748 16.2401 45.9043 16.086C46.0606 15.9319 46.1847 15.7482 46.2694 15.5458C46.3541 15.3433 46.3978 15.126 46.3978 14.9065C46.3978 14.687 46.3541 14.4697 46.2694 14.2672C46.1847 14.0647 46.0606 13.8811 45.9043 13.727C45.748 13.5728 45.5626 13.4513 45.359 13.3695C45.1553 13.2877 44.9374 13.2471 44.7179 13.2502H44.5001L41.8863 9.32956C40.7579 7.63687 38.8685 6.62522 36.8335 6.62522H31.9467C32.0356 6.37369 32.0624 6.10441 32.0249 5.84028C31.9874 5.57615 31.8867 5.32498 31.7313 5.10815C31.5758 4.89132 31.3703 4.71524 31.1322 4.59489C30.8942 4.47453 30.6305 4.41347 30.3638 4.41688H22.6346ZM9.90648 19.8752L12.283 42.0534C12.6143 45.1473 15.2099 47.4794 18.3214 47.4794H34.6769C37.7873 47.4794 40.383 45.1473 40.7153 42.0534L43.0919 19.8752H9.90648Z"
                  fill="#272626"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBasket;
