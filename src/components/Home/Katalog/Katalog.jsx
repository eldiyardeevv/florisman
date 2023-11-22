import React from "react";

import catalog1 from "../../../img/catalog1.png";
import roze from "../../../img/roze.png";
const Katalog = () => {
  return (
    <section id="catalog">
      <div className="container">
        <div className="catalog">
          <h1>Почему именно мы?</h1>
          <div className="catalog--cards">
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
            <img src={catalog1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Katalog;
