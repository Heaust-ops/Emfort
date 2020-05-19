import React from "react";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import "./Market.css";

const chunk = (arr, len) => {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
};

const Market = (props) => {
  const searchResults = useSelector((state) => state.searchMarket.query);
  return (
    <div className={`${props.className} mt-16 text-white`}>
      {searchResults ? (
        chunk(Object.values(searchResults), 3).map((j) => (
          <div
            key={j[0]._id}
            style={
              window.innerWidth > 1024 ? { width: "1024px" } : { width: "100%" }
            }
            className="flex justify-around"
          >
            {j.map((i) => (
              <Card
                title={i.title}
                count={i.count}
                price={i.price}
                description={i.description}
                picture={i.picture}
                key={i._id}
                _id={i._id}
              />
            ))}
          </div>
        ))
      ) : (
        <div
          style={{ height: "15rem", width: "80%" }}
          className={`flex mt-16 mx-auto justify-between float-center`}
        >
          <div
            style={{ width: "50%" }}
            className={`text-center align-center float-center center rounded duration-500`}
          >
            <img
              style={{ width: "30%" }}
              id={`loading_logo`}
              src={`https://res.cloudinary.com/heaust/image/upload/w_66,h_66/v1587886495/HeaustBrand/Logos/logo4_y3zrum.svg`}
              className={`left-0 loading_logo inline-block`}
              alt="Loading"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;
