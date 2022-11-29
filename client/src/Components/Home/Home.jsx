import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://hmlsolutions.com/cloud13/project/api/get_all.php")
      .then((response) => response.json())
      .then((items) => setItems(items));
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
