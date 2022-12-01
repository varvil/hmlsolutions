import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

//Initialize states and variables
const Home = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  //Fetch data from backend and show it in home page
  useEffect(() => {
    fetch("https://hmlsolutions.com/cloud13/project/api/get_all.php")
      .then((response) => response.json())
      .then((items) => setItems(items));
  }, []);

  return (
    //Divs for homepage context
    <div className="home__wrapper">
      <div className="home__section">
        <div className="home__content">
          <h3 className="home__description">Unlimited items on</h3>
          <h1 className="home__title">Grand exchange</h1>

          {/* Div for searching item (under process...) */}
          <div className="home__search">
            <i class="uil uil-layer-group"></i>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
        </div>

        {/* Maps fetched items with them names and prices */}
        <div className="item__section__right">
          {items.map((item) => {
            return (
              <span className="item" key={item.id}>
                <i class="uil uil-layer-group"></i>
                <h1>{item.nimi}</h1>
                <p>{item.hinta} €</p>
                <Link
                  className="buy"
                  to={`/cloud13/project/build/item/${item.id}`}
                >
                  See more
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
