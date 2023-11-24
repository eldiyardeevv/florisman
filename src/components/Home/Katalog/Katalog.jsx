import React from "react";

import catalog1 from "../../../img/catalog1.png";
import catalog2 from "../../../img/catalog2.png";
import catalog3 from "../../../img/catalog3.png";
import roze from "../../../img/roze.png";
import roze1 from "../../../img/roze1.png";
import roze2 from "../../../img/roze2.svg";
import roze3 from "../../../img/roze3.svg";
const Katalog = () => {
  return (
    <section id="catalog">
      <div className="container">
        <div className="catalog">
          <div className="catalog--title">
            <h1>Почему именно мы?</h1>
          </div>
          <div className="catalog--cards">
            <div className="catalog--cards__roze1">
              <img src={roze1} alt="" />
            </div>
            <div className="catalog--cards__roze">
              <img src={roze} alt="" />
            </div>
            <div className="catalog--cards__text">
              <p>
                {" "}
                Вы можете выбрать любую цветочную <br /> композицию из нашего
                каталога или <br /> заказать свой вариант. Вы можете выбрать{" "}
                <br />
                любую цветочную композицию из нашего <br /> каталога или
                заказать свой вариант
              </p>
            </div>
            <div className="catalog--cards__img">
              <img src={catalog1} alt="" />
            </div>
          </div>
          <div className="catalog--cards1">
            <div className="catalog--cards1__img">
              <img className="catalog--cards1__img" src={catalog2} alt="" />
            </div>
            <div className="catalog--cards1__text1">
              <p>
                Вы можете выбрать любую <br /> цветочную композицию из нашего{" "}
                <br /> каталога или заказать свой вариант
              </p>
            </div>
            <img src={roze2} alt="" />
          </div>
          <div className="catalog--cards2">
            <div className="catalog--cards2__zero3">
              <img src={roze3} alt="" />
            </div>
            <div className="catalog--cards2__text2">
              <p>
                Вы можете выбрать любую <br /> цветочную композицию из нашего{" "}
                <br /> каталога или заказать свой вариант
              </p>
            </div>
            <div className="catalog--cards__img">
              <img src={catalog3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Katalog;
