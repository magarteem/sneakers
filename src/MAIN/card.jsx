import React, { useEffect, useState } from "react";
import s from "./card.module.css";
import add from "./img/add.jpg";
import buy from "./img/buy.jpg";
import noFav from "./img/noFav.svg";
import fav from "./img/fav.svg";
import { AppContext } from "../App";

const Card = ({ id, h3, src, howMatch }) => {
  const { setFavMainRedFU, setFav_API_FU, setfavItemsLocal } =
    React.useContext(AppContext);
  //
  const [addTrue, setAddTrue] = useState(false); // избранное вкл.выкл сердечко
  const [addBuy, setAddBuy] = useState(false); // купить

  const favClick = () => {
    setAddTrue((prev) => !prev); //меняем fav \ noFav
    setFavMainRedFU(!addTrue); // fav count
    setfavItemsLocal((prev) => [...prev, { id, h3, src, howMatch }]); // send fav локально
    setFav_API_FU({ id, h3, src, howMatch }); // send fav bkend
  };

  const addBuyClick = () => {
    setAddBuy(!addBuy); //меняем добавлено \ не добавлено в корзину
  };

  // ! ============
  return (
    <div className={s.cardItem}>
      <div className={s._itemUp}>
        <img className={s.sneakers} src={src} alt="img1" />
        {
          <img
            alt="fav"
            className={s.fav}
            src={addTrue ? fav : noFav}
            height="20"
            onClick={favClick} //favorit
          />
        }
      </div>
      <div className={s._itemDown}>
        <h3>{h3}</h3>
        <div className={s._DownFlex}>
          <div>
            <p className={s.chena}>Цена:</p>
            <p className={s.chenaNumber}>{howMatch}руб.</p>
          </div>
          <div className={s.add}>
            {
              <img
                alt="add"
                src={addBuy ? buy : add}
                onClick={addBuyClick} //в корзину
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
