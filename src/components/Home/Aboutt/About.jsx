import React, { useState } from "react";
import fotoinput from "./../../../img/fotoinput.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import axios from "axios";
import foto1 from "./../../../img/foto1.png";
import foto2 from "./../../../img/foto2.png";
import foto3 from "./../../../img/foto3.png";
import foto4 from "./../../../img/foto4.png";
import foto5 from "./../../../img/foto5.png";
import foto6 from "./../../../img/foto6.png";
import foto7 from "./../../../img/foto7.png";
import foto8 from "./../../../img/foto8.png";
const About = () => {
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  let TOKEN = `6723688995:AAE6iXPG_5_Q-wuTVIe3P86IRWnoElh_NPE`;
  let CHAT_ID = `-1002031766610`;
  let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  let values = `заказ:\n`;
  values += `Картинка ${img} \n`;
  values += ` ${price}$ \n`;
  values += `Имя: ${title} \n`;
  const setForm = async () => {
    await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_model: "html",
      text: values,
    });
  };
  return (
    <>
      <section id="about">
        <div className="container">
          <span className="about__title">Предложи свой букет</span>
          <div className="about__info">
            <div className="about__block">
              <input
                onChange={(e) => setImg(e.target.value)}
                className="about__imia"
                type="text"
                placeholder="     img"
              />
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="about__flower"
                type="text"
                placeholder="    price"
              />
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="about__inp"
                type="text"
                placeholder=" title"
              />
            </div>
            <img className="about__img" src={fotoinput} alt="img" />
          </div>
          <button onClick={() => setForm()} className="about__btn">
            Submit
            <TelegramIcon
              sx={{
                width: "30px",
                height: "40px",
                color: "#2183e4",
                margin: "-12px",
                marginLeft: "15px",
              }}
            />
          </button>
        </div>
      </section>
      <section id="favorite">
        <div className="container">
          <div className="favorite__info">
            <h1 className="favorite__title1">FLORISTMAN</h1>
            <p className="favorite__title2">Широкий выбор на любой вкус</p>
            <div className="favorite__block1">
              <img src={foto1} alt="img" />
              <img src={foto2} alt="img" />
              <img src={foto3} alt="img" />
              <img src={foto4} alt="img" />
            </div>
            <div className="favorite__block2">
              <img src={foto5} alt="img" />
              <img src={foto6} alt="img" />
              <img src={foto7} alt="img" />
              <img src={foto8} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
