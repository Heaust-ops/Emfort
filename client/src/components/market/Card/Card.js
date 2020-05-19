import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="m-4 z-30 p-4 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={props.picture}
            alt="Avatar"
            style={{ height: "12rem", width: "12rem" }}
          />
        </div>
        <div className="flip-card-back">
          <h1 className="tooltip">
            {props.title}{" "}
            <span className={`tooltiptext z-50`}>{props.description}</span>
          </h1>
          <p>In Stock: {props.count}</p>
          <p>Price: {props.price}</p>
          <p>
            {props.description.slice(0, 50)}
            {`...`}
          </p>
          <br />
          <button
            style={{ fontWeight: "900" }}
            className={`p-2 px-4 m-2 bg-green-900 duration-500 rounded-full hover:bg-green-400`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
