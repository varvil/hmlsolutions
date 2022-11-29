import React from "react";
import { useState } from "react";
import "./additem.css";

const Additem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addItem = (e) => {
    e.preventDefault();
    
    fetch("https://hmlsolutions.com/cloud13/project/api/put_send.php?", {
      method: "POST",
      mode: "no-cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        price: price,
      }),
    });
    console.log({ name, price });
  };

  return (
    <div className="add__wrapper">
      <h1>Add listing</h1>

      <div className="input__container">
        <div className="input__section">
          <p>Name </p>
          <input
            required
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p>price </p>
          <input
            min={0}
            required
            className="input__number"
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button onClick={addItem}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Additem;
