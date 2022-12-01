import React from "react";
import { useState } from "react";
import "./additem.css";

const Additem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const addItem = (e) => {
    e.preventDefault();

    if (name === "" || price === "") {
      setErrorMessage("Fields can't be empty!");
      setTimeout(function () {
        window.location.reload();
      }, 1500);
    } else {
      setSuccessMessage("Item added successfully!");

      fetch("https://hmlsolutions.com/cloud13/project/api/put_send.php?", {
        method: "POST",
        mode: "no-cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name,
          price: price,
          description: description,
        }),
      });

      setTimeout(function(){
       window.location.reload();
      }, 1500);
    }
  };

  return (
    <div className="add__wrapper">
      <h1>Add listing</h1>

      {successMessage && <div className="success"> {successMessage} </div>}
      {errorMessage && <div className="error"> {errorMessage} </div>}

      <div className="input__container">
        <div className="input__section">
          <p>Name </p>
          <input
            required={true}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p>Description</p>
          <input
            required
            className="description__text"
            type="textbox"
            onChange={(e) => {
              setDescription(e.target.value);
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
