import React, { useState, useEffect } from "react";
import { Bd_Api, Fav_API } from "./api/api";
import s from "./App.module.css";
import Header from "./HEADER/_Header";
import Korzina from "./KORZINA/Korzina";
import Main from "./MAIN/_Main";
import MyFavorits from "./MAIN/MyFavorits/MyFavorits";
import Podval from "./PODVAL/_Podval";
import { Route } from "react-router-dom";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = useState([]); //бд
  const [favMainRed, setFavMainRed] = useState(0);
  const [favItemsLocal, setfavItemsLocal] = useState([]); // список избранных локально
  const [fav_API, setFav_API] = useState([]); // список избранных c mokAPI
  const [korzinaOnOFF, setKorzinaOnOFF] = useState(false); //  показать\скрыть корзину

  //                                ?

  useEffect(() => {
    Bd_Api(setItems); //api
  }, []);

  //    !

  useEffect(() => {
    //console.log(favItemsLocal);
    //console.log("---------");
  }, [favItemsLocal]);

  //    !
  //    !

  const testCL = (testCL) => {
    //console.log(testCL);
  };

  //    !

  // send fav bkend
  const setFav_API_FU = (favItem) => {
    setFav_API((prev) => [...prev, favItem]);
    Fav_API(favItem);
  };

  // fav count
  const setFavMainRedFU = (addTrue) => {
    setFavMainRed((prev) => (addTrue ? prev + 1 : prev - 1));
  };

  return (
    <div className={s.container}>
      <AppContext.Provider
        value={{
          favMainRed,
          setFavMainRedFU,
          setFav_API_FU,
          setKorzinaOnOFF,
          setfavItemsLocal,
          favItemsLocal,
        }}
      >
        {korzinaOnOFF && <Korzina />}

        <Header />

        <Route exact path="/" render={() => <Main items={items} />} />
        <Route path="/favorit" render={() => <MyFavorits />} />
      </AppContext.Provider>
      <Podval />
    </div>
  );
}

export default App;
