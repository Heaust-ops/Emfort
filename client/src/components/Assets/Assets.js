import React, { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import { connect } from "react-redux";
import "./Assets.css";

export const Assets = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("~Describe your Asset here~");
  const [picture, setpicture] = useState("");
  const [count, setcount] = useState(1);
  const [imageUploading, setimageUploading] = useState(false);
  const [titleBlink, settitleBlink] = useState([null, 0, 8]);
  const [descriptionBlink, setdescriptionBlink] = useState([null, 0, 8]);
  const [imageBlink, setimageBlink] = useState([null, 0, 2]);

  useEffect(() => {
    if (titleBlink[1] !== 0) {
      if (titleBlink[1] === titleBlink[2]) settitleBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          settitleBlink([!titleBlink[0], titleBlink[1] + 1, titleBlink[2]]);
        }, 300);
      }
    }
  }, [titleBlink]);

  useEffect(() => {
    if (descriptionBlink[1] !== 0) {
      if (descriptionBlink[1] === descriptionBlink[2])
        setdescriptionBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          setdescriptionBlink([
            !descriptionBlink[0],
            descriptionBlink[1] + 1,
            descriptionBlink[2],
          ]);
        }, 300);
      }
    }
  }, [descriptionBlink]);

  useEffect(() => {
    if (imageBlink[1] !== 0) {
      if (imageBlink[1] === imageBlink[2]) setimageBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          setimageBlink([!imageBlink[0], imageBlink[1] + 1, imageBlink[2]]);
        }, 2000);
      }
    }
  }, [imageBlink]);

  const blinkN = (state2blink, times) => {
    if (state2blink === "imageBlink")
      setimageBlink([!imageBlink[0], 1, 2 * times]);
    if (state2blink === "descriptionBlink")
      setdescriptionBlink([!descriptionBlink[0], 1, 2 * times]);
    if (state2blink === "titleBlink")
      settitleBlink([!titleBlink[0], 1, 2 * times]);
  };

  const proceed = () => {
    if (!count) {
      setcount(1);
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
    if (!picture) {
      blinkN("imageBlink", 1);
      return;
    }
  };

  const fileInput = useRef();
  return (
    <div>
      <div
        style={{ height: "15rem", width: "80%" }}
        className={`flex mt-16 mx-8 justify-between float-right`}
      >
        <div
          onClick={() => fileInput.current.click()}
          style={{ width: "15rem", height: "15rem" }}
          className={`text-blue-800 hover:bg-red-400 hover:text-black rounded cursor-pointer`}
        >
          <h1
            style={{ marginTop: "25%" }}
            className={`${imageBlink[0] ? `loading_logo` : ``} text-6xl`}
          >
            <i className="fa fa-plus" />
          </h1>
          <input type="file" style={{ display: "none" }} ref={fileInput} />
        </div>
        <div style={{ width: "70%" }} className={`rounded bg-transparent`}>
          <div className={`flex justify-around`}>
            <input
              size={10}
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
              maxLength={3}
              onChange={(event) =>
                setcount(event.target.value.replace(/[^0-9]/gm, ""))
              }
              className={`text-xl text-center bg-black border-gray-900 hover:border-gray-800 focus:border-gray-600 p-2 my-2 border-4 rounded-full`}
            />
          </div>
          <div style={{ height: "70%" }}>
            <textarea
              value={description}
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
    </div>
  );
};

export default Assets;
