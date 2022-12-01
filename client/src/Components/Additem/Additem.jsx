import React from "react";
import { useState } from "react";
import "./additem.css";

//Initialize states and variables
const Additem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  //Function to add item. If fields are empty, sends error message and filled, sends success message
  const addItem = (e) => {
    e.preventDefault();

    if (name === "" || price === "") {
      setErrorMessage("Fields can't be empty!");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } else {
      setSuccessMessage("Item added successfully!");

      //Posts user's input data to backend url
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

      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    
    <div className="add__wrapper">
      <h1>Add listing</h1>
      
      {/* Calling two different messages */}
      {successMessage && <div className="success"> {successMessage} </div>}
      {errorMessage && <div className="error"> {errorMessage} </div>}
      
      {/* Div for name */}
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
          {/* Div for description */}
          <p>Description</p>
          <input
            required
            className="description__text"
            type="textbox"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {/* Div for price */}
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
          {/* The function addItem is executed when button is clicked */}
          <button onClick={addItem}>Submit</button>
        </div>
      </div>
    </div>
    
  );
};

export default Additem;
