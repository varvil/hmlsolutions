import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./item.css";

//Initialize states and variables
const Item = () => {
  const [item, setItem] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  //Fetching just one item details
  useEffect(() => {
    fetch(
      "https://hmlsolutions.com/cloud13/project/api/get_one.php?id=" + params.id
    )
      .then((response) => response.json())
      .then((item) => setItem(item));
  }, []);

  //Function to delete item
  const removeHandler = (e) => {
    e.preventDefault();

    setTimeout(function () {
      window.location.reload();
    });

    const path = "/cloud13/project/build/";
    navigate(path);

    //Delete item by its id
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


  /*Item can be modified by pressing button. It picks id from url 
    and knows with that what item is moodified.
    Function removeHandler is executed when button is clicked
  */
  return (
    <div className="oitem__card">
      <div className="oitem__photo">

        <div className="modify">
        <Link
          className="modify__button"
          to={`/cloud13/project/build/modify/${item.id}`}
        >
          Modify
        </Link>
        </div>

        <button onClick={removeHandler}>Delete</button>
      </div>

      <div className="oitem__description">
        <h2>{item.nimi}</h2>
        <h1>{item.hinta} €</h1>
        <p>Description: {item.description}</p>
      </div>
    </div>
  );
};

export default Item;
