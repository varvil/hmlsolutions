import React from "react";
import { useState } from "react";
import Axios from "axios";

const Additem = () => {
  const [itemname, setItemname] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const addItem = () => {
    Axios.post("http://localhost:5000/add", {
      itemname: itemname,
      price: price,
      description: description,
    }).then(() => {
      console.log("Success");
    });
  };

  return (
    <div className="add__section">
      Name{" "}
      <input
        type="text"
        onChange={(e) => {
          setItemname(e.target.value);
        }}
      />
      price{" "}
      <input
        type="number"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      Description{" "}
      <input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={addItem}>Submit</button>
    </div>
  );
};

export default Additem;
