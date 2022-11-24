import React from "react";
import "./home.css";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";

const Home = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/items").then((response) => {
      setItemList(response.data);
    });
  }, []);

  return (
    <div className="home__wrapper">
      <div className="home__section">
        <div className="home__content">
          <h3 className="home__description">lorem ipsum lopsum</h3>
          <h1 className="home__title">lorem larem</h1>
          <div className="home__search">
            <i class="uil uil-search"></i>
            <input type="text" id="search__input" className="text" />
          </div>
        </div>
        <div className="item__section">
          {itemList.map((value) => {
            return (
              <span className="item">
                <h2>{value.itemname}</h2>
                <h3>{value.price} €</h3>
                <p>{value.description}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
