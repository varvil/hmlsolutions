import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./item.css";

const Item = () => {
  const [item, setItem] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://hmlsolutions.com/cloud13/project/api/get_one.php?id=" + params.id
    )
      .then((response) => response.json())
      .then((item) => setItem(item));
  }, []);

  const removeHandler = (e) => {
    e.preventDefault();

    const path = '/cloud13/project/build/404';
    navigate(path);

    fetch(
      "https://hmlsolutions.com/cloud13/project/api/delete.php?id=" + params.id,
      {
        method: "POST",
        mode: "no-cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: params.id,
        }),
      }
    );
  };

  return (
    <div className="oitem__card">
      <div className="oitem__photo">
        <button>Modify</button>
        <button onClick={removeHandler}>Delete</button>
      </div>

      <div className="oitem__description">
        <h2>{item.nimi}</h2>
        <h1>{item.hinta} €</h1>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
