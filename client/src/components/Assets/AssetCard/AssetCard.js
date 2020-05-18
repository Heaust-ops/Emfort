import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AssetCard.css";

const useBlink = (stateBlink, setstateBlink, duration = 300) => {
  useEffect(() => {
    if (stateBlink[1] !== 0) {
      if (stateBlink[1] === stateBlink[2]) setstateBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          setstateBlink([!stateBlink[0], stateBlink[1] + 1, stateBlink[2]]);
        }, duration);
      }
    }
  }, [stateBlink]);
};

export const AssetCard = (props) => {
  const [title, settitle] = useState(props.title);
  const [description, setdescription] = useState(props.description);
  const [count, setcount] = useState(props.count);
  const [price, setprice] = useState(props.price);
  const picture = props.picture;

  const [normaltitle, setnormaltitle] = useState(props.title);
  const [normaldescription, setnormaldescription] = useState(props.description);
  const [normalcount, setnormalcount] = useState(props.count);
  const [normalprice, setnormalprice] = useState(props.price);

  const [titleBlink, settitleBlink] = useState([null, 0, 8]);
  const [descriptionBlink, setdescriptionBlink] = useState([null, 0, 8]);
  const [imageBlink, setimageBlink] = useState([null, 0, 2]);
  const [priceBlink, setpriceBlink] = useState([null, 0, 8]);

  const [updateNeeded, setupdateNeeded] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const [isDeleted, setisDeleted] = useState(false);

  useBlink(titleBlink, settitleBlink);
  useBlink(priceBlink, setpriceBlink);
  useBlink(descriptionBlink, setdescriptionBlink);
  useBlink(imageBlink, setimageBlink, 2000);

  useEffect(() => {
    if (
      title !== normaltitle ||
      count !== normalcount ||
      description !== normaldescription ||
      price !== normalprice
    )
      setupdateNeeded(true);
    else setupdateNeeded(false);
  }, [
    title,
    count,
    description,
    price,
    normaltitle,
    normalcount,
    normaldescription,
    normalprice,
  ]);

  const blinkN = (state2blink, times) => {
    if (state2blink === "imageBlink")
      setimageBlink([!imageBlink[0], 1, 2 * times]);
    if (state2blink === "descriptionBlink")
      setdescriptionBlink([!descriptionBlink[0], 1, 2 * times]);
    if (state2blink === "titleBlink")
      settitleBlink([!titleBlink[0], 1, 2 * times]);
    if (state2blink === "priceBlink")
      setpriceBlink([!priceBlink[0], 1, 2 * times]);
  };

  const deleteAsset = () => {
    setisLoading(true);
    axios
      .delete("/api/assets/delete/" + props._id)
      .then((res) => {
        setisDeleted(true);
      })
      .catch((err) => console.log(err));
    setisLoading(false);
  };

  const updateAsset = () => {
    if (!count) {
      setcount(1);
      return;
    }
    if (!price) {
      blinkN("priceBlink", 4);
      return;
    }
    if (!title) {
      blinkN("titleBlink", 4);
      return;
    }
    if (!description || description === "~Describe your Asset here~") {
      blinkN("descriptionBlink", 4);
      return;
    }

    // Headers
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    // Request Body
    const body = JSON.stringify({
      title,
      description,
      count,
      price,
    });

    setisLoading(true);

    axios
      .put("/api/assets/update/" + props._id, body, config)
      .then((res) => {
        setnormalcount(count);
        setnormaldescription(description);
        setnormalprice(price);
        setnormaltitle(title);
        setupdateNeeded(false);
      })
      .catch((err) => {
        console.log(err);
      });

    setisLoading(false);
  };

  return (
    <>
      {isDeleted ? null : (
        <div>
          {isLoading ? (
            <div
              style={{ width: "50%" }}
              className={`text-center align-center float-center center rounded duration-500`}
            >
              <img
                style={{ width: "40%" }}
                id={`loading_logo`}
                src={`https://res.cloudinary.com/heaust/image/upload/w_66,h_66/v1587886495/HeaustBrand/Logos/logo4_y3zrum.svg`}
                className={`left-0 loading_logo inline-block`}
                alt="Loading"
              />
            </div>
          ) : (
            <div
              style={{ height: "15rem", width: "80%" }}
              className={`flex xl:mb-0 mb-16 mt-16 mx-8 xl:flex-row flex-col justify-between float-center`}
            >
              <div
                style={{ width: "15rem", height: "15rem" }}
                className={`rounded`}
              >
                <img src={picture} />
              </div>
              <div
                style={{ width: "70%" }}
                className={`rounded bg-transparent`}
              >
                <div className={`flex xl:flex-row flex-col justify-around`}>
                  <input
                    size={20}
                    maxLength={20}
                    value={title}
                    placeholder="Title"
                    onChange={(event) => settitle(event.target.value)}
                    className={`${
                      titleBlink[0] ? `border-red-600` : `border-gray-900`
                    } text-xl text-center bg-black hover:border-gray-800 focus:border-gray-600 p-2 my-2 border-4 rounded-full`}
                  />
                  <input
                    size={3}
                    value={count}
                    min={1}
                    placeholder="qty"
                    minLength={1}
                    maxLength={3}
                    onChange={(event) =>
                      setcount(event.target.value.replace(/[^0-9]/gm, ""))
                    }
                    className={`text-xl text-center bg-black border-gray-900 hover:border-gray-800 focus:border-gray-600 p-2 my-2 border-4 rounded-full`}
                  />
                  <input
                    size={6}
                    value={price}
                    min={1}
                    minLength={1}
                    placeholder="price"
                    maxLength={6}
                    onChange={(event) =>
                      setprice(event.target.value.replace(/[^0-9]/gm, ""))
                    }
                    className={`${
                      priceBlink[0] ? `border-red-600` : `border-gray-900`
                    } text-xl text-center bg-black hover:border-gray-800 focus:border-gray-600 p-2 my-2 border-4 rounded-full`}
                  />
                </div>
                <div style={{ height: "70%" }}>
                  <textarea
                    value={description}
                    maxLength={350}
                    style={{ width: "95%", height: "95%" }}
                    onChange={(event) => setdescription(event.target.value)}
                    className={`${
                      descriptionBlink[0] ? `border-red-600` : `border-gray-900`
                    } resize-none text-xl bg-black hover:border-gray-800 focus:border-gray-600 p-2 my-2 border-4 rounded`}
                  >
                    {description}
                  </textarea>
                </div>
              </div>
              <div
                onClick={updateNeeded ? updateAsset : deleteAsset}
                style={{ width: "10%" }}
                className={`hover:bg-${
                  updateNeeded ? "green" : "red"
                }-600 hover:text-black rounded cursor-pointer`}
              >
                <h1 style={{ marginTop: "55%" }} className={`text-5xl`}>
                  <i
                    className={`fa fa-${updateNeeded ? "refresh" : "trash"}`}
                  />
                </h1>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AssetCard;
