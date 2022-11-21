import React from "react";
import data from "./DummyData.json";
import "./list.css";
import { Link } from "react-router-dom";

const List = (props) => {
  //Create new array by filtering the original array
  const filteredData = data.filter((el) => {
    //if no input return the original
    if (props.input === "") {
      return el;
    }
    //return the item which containts the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });

  return (
    <div className="search__result">
      <ul>
        {filteredData.slice(0, 10).map((item) => (
          <li key={item.id}>
            <Link to={item.text}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="search__underline">
        <span className="div__underline"></span>
      </div>
    </div>
  );
};

export default List;
