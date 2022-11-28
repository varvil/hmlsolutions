import React from "react";
import { useState } from "react";

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
        price: price
      })
      })
      console.log({name, price})
  };

  return (
    <div className="add__section">
      Name{" "}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      price{" "}
      <input
        type="number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <button onClick={addItem}>Submit</button>
    </div>
  );
};

export default Additem;
