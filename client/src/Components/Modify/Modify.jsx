import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./modify.css";

const Modify = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const params = useParams();

  const iid = params.id;

  const modifyItems = (e) => {
    e.preventDefault();

    if (name === "" || price === "") {
      setErrorMessage("Fields can't be empty!");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } else {
      setSuccessMessage(`item ID :` + iid + " modified");

      fetch("https://hmlsolutions.com/cloud13/project/api/update_send.php?", {
        method: "POST",
        mode: "no-cors",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: name,
          price: price,
          description: description,
          id: iid,
        }),
      });
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className="modify__container">
      <h1>modify item</h1>
      {successMessage && <div className="success"> {successMessage} </div>}
      {errorMessage && <div className="error"> {errorMessage} </div>}

      <div className="input__container">
        <div className="input__section">
          <div className="hidden">
            <input
              value={iid}
              className="this__is__going__to__be__hidden"
              type="text"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>

          <p>New name </p>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p>New description</p>
          <input
            required
            className="description__text"
            type="textbox"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <p>New price </p>
          <input
            min={0}
            required
            className="input__number"
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <button onClick={modifyItems}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modify;
