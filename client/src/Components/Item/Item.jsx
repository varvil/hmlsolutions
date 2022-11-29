import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./item.css";

const Item = () => {
  const [item, setItem] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch('https://hmlsolutions.com/cloud13/project/api/get_one.php?id=' + params.id)
      .then((response) => response.json())
      .then((item) => setItem(item))
  }, []);

  return  (
    <div className="oitem__wrapper">

      <div className="item__container">
        {item.nimi} <br></br>
        {item.hinta} $
      </div>

    </div>
  );
};

export default Item;
