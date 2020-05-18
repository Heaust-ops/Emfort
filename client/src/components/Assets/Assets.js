import React, { useState, useEffect, useRef } from "react";
import AssetCard from "./AssetCard/AssetCard";
import axios from "axios";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useSelector } from "react-redux";
import "./Assets.css";

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

export const Assets = (props) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("~Describe your Asset here~");
  const [image, setimage] = useState(null);
  const [imageDestination, setimageDestination] = useState(null);
  const [picture, setpicture] = useState(null);
  const [count, setcount] = useState(null);
  const [price, setprice] = useState(null);
  const [uploading, setuploading] = useState(false);
  const [titleBlink, settitleBlink] = useState([null, 0, 8]);
  const [descriptionBlink, setdescriptionBlink] = useState([null, 0, 8]);
  const [imageBlink, setimageBlink] = useState([null, 0, 2]);
  const [priceBlink, setpriceBlink] = useState([null, 0, 8]);
  const [serverResponse, setserverResponse] = useState([]);

  const user = useSelector((state) => state.auth.user);

  useBlink(titleBlink, settitleBlink);
  useBlink(priceBlink, setpriceBlink);
  useBlink(descriptionBlink, setdescriptionBlink);
  useBlink(imageBlink, setimageBlink, 2000);

  useEffect(() => {
    if (picture) {
      serverUpload();
    }
  }, [picture]);

  useEffect(() => {
    setuploading(true);
    axios
      .get("/api/assets/" + user.username)
      .then((res) => setserverResponse(res.data))
      .catch((err) => console.log(err));
    setuploading(false);
  }, []);

  const _crop = () => {
    if (cropper.current.getCroppedCanvas()) {
      setimageDestination(
        cropper.current.getCroppedCanvas().toDataURL("image/jpeg", 0.5)
      );
    }
  };

  const dataURItoBlob = (dataURI) => {
    var binary = atob(dataURI.split(",")[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
  };

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

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setimage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setimage(null);
    }
  };

  const serverUpload = () => {
    // Headers
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    // Request Body
    const body = JSON.stringify({
      username: user.username,
      picture,
      title,
      description,
      count,
      price,
    });

    axios
      .post("/api/assets", body, config)
      .then((res) => {
        setserverResponse(res.data);
        finishUpload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadAsset = () => {
    var url = `https://api.cloudinary.com/v1_1/heaust/upload`;
    var fd = new FormData();
    const blob = dataURItoBlob(imageDestination);
    fd.append("upload_preset", "userAsset");
    fd.append("file", blob);
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" },
      onUploadProgress: (progressEvent) => {
        var progress = Math.round(
          (progressEvent.loaded * 100.0) / progressEvent.total
        );
        console.log(progress);
      },
    };
    axios
      .post(url, fd, config)
      .then((res) => {
        var response = res.data;
        var url = response.secure_url;
        setpicture(url);
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const finishUpload = () => {
    setimage("");
    settitle("");
    setdescription("~Describe your Asset here~");
    setcount("");
    setprice("");
    setimageDestination("");
    fileInput.current.value = "";
    setpicture(null);
    setuploading(false);
  };

  const proceed = () => {
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
    if (!image || !imageDestination) {
      blinkN("imageBlink", 1);
      return;
    }

    setuploading(true);
    uploadAsset();
  };

  const fileInput = useRef();
  const cropper = useRef();
  return (
    <div className={`${props.className} xl:mb-0 mb-16`}>
      <div
        style={{ width: "80%" }}
        className={`flex mt-16 mx-8 xl:flex-row flex-col justify-between float-center`}
      >
        <div
          onClick={() => fileInput.current.click()}
          style={{ width: "15rem", height: "15rem" }}
          className={`rounded cursor-pointer ${
            imageDestination
              ? "bg-black"
              : "text-blue-800 hover:bg-red-400 hover:text-black"
          }`}
        >
          {imageDestination ? (
            <img id="ChosenAssetImage" src={imageDestination} />
          ) : (
            <>
              <h1
                style={{ marginTop: "25%" }}
                className={`${imageBlink[0] ? `loading_logo` : ``} text-6xl`}
              >
                <i className="fa fa-plus" />
              </h1>
              <p
                style={{ fontWeight: "900", transform: "translateY(-2rem)" }}
                className={`text-2xl tracking-widest text-center`}
              >
                <br />
                Add
                <br />
                Image
              </p>
            </>
          )}
          <input
            type="file"
            onChange={onImageChange}
            style={{ display: "none" }}
            ref={fileInput}
          />
        </div>
        <div style={{ width: "70%" }} className={`rounded bg-transparent`}>
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
            />
          </div>
        </div>
        <div
          onClick={proceed}
          style={{ width: "10%" }}
          className={`hover:bg-blue-400 hover:text-black rounded cursor-pointer`}
        >
          <h1 style={{ marginTop: "55%" }} className={`text-5xl`}>
            <i className="fa fa-plus" />
          </h1>
        </div>
      </div>
      {uploading ? (
        <div
          style={{ height: "15rem", width: "80%" }}
          className={`flex mt-16 mx-auto xl:flex-row flex-col justify-between float-center`}
        >
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
        </div>
      ) : null}
      {image && !uploading ? (
        <div
          style={{ height: "15rem", width: "80%" }}
          className={`flex mt-16 mb-16 mx-auto xl:flex-row flex-col justify-between float-center`}
        >
          <div
            style={{ width: "50%" }}
            className={`text-center align-center float-center center rounded duration-500`}
          >
            <Cropper
              ref={cropper}
              src={image}
              aspectRatio={1}
              getCroppedCanvas={{ fillColor: "#ffffff" }}
              guides={false}
              crop={_crop}
            />
          </div>
        </div>
      ) : null}
      {image && !uploading ? (
        <>
          <br />
          <br />
          <br />
        </>
      ) : null}
      <div>
        {uploading
          ? null
          : serverResponse.map((i) => (
              <AssetCard
                title={i.title}
                count={i.count}
                price={i.price}
                description={i.description}
                picture={i.picture}
                _id={i._id}
              />
            ))}
      </div>
    </div>
  );
};

export default Assets;
