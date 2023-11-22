import React from "react";
import image1 from "../../img/image-bg.png";
import roma from "../../img/Ромашки.png";

const Home = () => {
  return (
    <>
      <div id="home">
        <img src={image1} alt="" />
        <div className="container">
          <div className="home">
            <div className="home__text">
              <p className="home__text__p">Подарите ощущение праздника</p>
              <h1 className="home__text__p__h1">
                Собираем букеты, созданные для Вас
              </h1>
              <button className="home__text__p__h1__btn">Выбрать букет</button>
            </div>
          </div>
        </div>
      </div>
      <section id="skidki">
        <h1>Скидки</h1>
        <div className="container">
          <div className="skidki">
            <div className="skidki__card">
              <div className="skidki__card__block">
                <img src={roma} alt="" />
                <p className="skidki__card__block__p">
                  Самые красивые букеты цветов
                </p>
                <p className="skidki__card__block__p">для вас</p>
                <div className="skidki__card__com">
                  <h4 className="skidki__card__com__h4">3700 com</h4>
                  <button className="skidki__card__com__h4__btn">
                    Заказать
                  </button>
                </div>
              </div>
              <div className="skidki__card__text">
                <p className="skidki__card__text__p">ХИТ ПРОДАЖ</p>
                <p className="skidki__card__text__p__p1">НОВИНКА</p>
                <p className="skidki__card__text__p__p1__p2">БУКЕТ ДНЯ</p>
              </div>
            </div>
            <div className="skidki__card">
              <div className="skidki__card__block">
                <img src={roma} alt="" />
                <p className="skidki__card__block__p">
                  Самые красивые букеты цветов
                </p>
                <p className="skidki__card__block__p">для вас</p>
                <div className="skidki__card__com">
                  <h4 className="skidki__card__com__h4">3700 com</h4>
                  <button className="skidki__card__com__h4__btn">
                    Заказать
                  </button>
                </div>
              </div>
              <div className="skidki__card__text">
                <p className="skidki__card__text__p">ХИТ ПРОДАЖ</p>
                <p className="skidki__card__text__p__p1">НОВИНКА</p>
                <p className="skidki__card__text__p__p1__p2">БУКЕТ ДНЯ</p>
              </div>
            </div>
            <div className="skidki__card">
              <div className="skidki__card__block">
                <img src={roma} alt="" />
                <p className="skidki__card__block__p">
                  Самые красивые букеты цветов
                </p>
                <p className="skidki__card__block__p">для вас</p>
                <div className="skidki__card__com">
                  <h4 className="skidki__card__com__h4">3700 com</h4>
                  <button className="skidki__card__com__h4__btn">
                    Заказать
                  </button>
                </div>
              </div>
              <div className="skidki__card__text">
                <p className="skidki__card__text__p">ХИТ ПРОДАЖ</p>
                <p className="skidki__card__text__p__p1">НОВИНКА</p>
                <p className="skidki__card__text__p__p1__p2">БУКЕТ ДНЯ</p>
              </div>
            </div>
            <div className="skidki__card">
              <div className="skidki__card__block">
                <img src={roma} alt="" />
                <p className="skidki__card__block__p">
                  Самые красивые букеты цветов
                </p>
                <p className="skidki__card__block__p">для вас</p>
                <div className="skidki__card__com">
                  <h4 className="skidki__card__com__h4">3700 com</h4>
                  <button className="skidki__card__com__h4__btn">
                    Заказать
                  </button>
                </div>
              </div>
              <div className="skidki__card__text">
                <p className="skidki__card__text__p">ХИТ ПРОДАЖ</p>
                <p className="skidki__card__text__p__p1">НОВИНКА</p>
                <p className="skidki__card__text__p__p1__p2">БУКЕТ ДНЯ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
