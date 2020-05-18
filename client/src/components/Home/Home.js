import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle_fullscreen } from "../../actions/miscActions";
import "./Home.css";

const bg1_images_home = ["assets/I_sfyrv2.jpg", "silhouette_dgk4ha.jpg"];
const bg1_image_home =
  bg1_images_home[Math.floor(Math.random() * bg1_images_home.length)];

const Home = (props) => {
  const [bgtextToggle, setbgtextToggle] = useState(false);
  const [isFullScreen, setisFullScreen] = useState(
    !window.screenTop && !window.screenY
  );
  const fullScreen = useSelector((state) => state.misc.fullScreen);
  const dispatch = useDispatch();

  const bgTextToggle = () => {
    setbgtextToggle(!bgtextToggle);
  };

  const updateOnResize = () => {
    setisFullScreen(!window.screenTop && !window.screenY);
    if (isFullScreen !== fullScreen) dispatch(toggle_fullscreen());
  };

  useEffect(() => {
    window.addEventListener("resize", updateOnResize);
    return () => {
      window.removeEventListener("resize", updateOnResize);
    };
  });

  const bg2 = useRef();
  const bg1 = useRef();

  return (
    <div className={`${props.className}`}>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${window.innerWidth},h_${window.innerHeight}/v1587117201/Emfort/${bg1_image_home}")`,
        }}
        className="bg-image z-10 overflow-hidden w-screen h-screen"
        onWheel={() => {
          bg2.current.scrollIntoView({ behavior: "smooth" });
        }}
        ref={bg1}
      ></div>

      <div
        onClick={() => {
          bgTextToggle();
        }}
        onWheel={() => {
          bg2.current.scrollIntoView({ behavior: "smooth" });
        }}
        className={`${
          bgtextToggle ? "focused" : ""
        } noselect z-50 duration-500 bg-text rounded-full`}
      >
        <h2>Welcome to Emfort</h2>
        <br></br>
        <h1 style={{ fontSize: "2.75rem" }}>I am Heaust Azure</h1>
        <br></br>
        <p>and this is a minimalist approach to an eCom Website</p>
      </div>
      <div
        onClick={() => {
          bg2.current.scrollIntoView();
        }}
        onWheel={() => {
          bg2.current.scrollIntoView({ behavior: "smooth" });
        }}
        style={{ transform: "translateY(-7rem)" }}
        className={`noselect cursor-pointer w-16 h-16 text-gray-600 border-gray-600 hover:border-white hover:text-white z-50 duration-500 bg-text-3 rounded-full`}
      >
        <h2 className={`text-3xl`}>
          <i class="fa fa-arrow-down"></i>
        </h2>
      </div>
      <div
        onClick={() => {
          dispatch(toggle_fullscreen());
        }}
        onWheel={() => {
          bg2.current.scrollIntoView({ behavior: "smooth" });
        }}
        className={`noselect cursor-pointer tracking-widest z-50 duration-500 bg-text-3 rounded-full`}
      >
        <h2>{!fullScreen ? `DIVE` : `END DIVE`}</h2>
      </div>

      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${window.innerWidth},h_${window.innerHeight}/v1587903988/Emfort/assets/lofi_edit_chlcr0.jpg")`,
          marginTop: "0.05rem",
        }}
        className="bg-image-2 w-screen h-screen"
        onWheel={() => {
          bg1.current.scrollIntoView({ behavior: "smooth" });
        }}
        ref={bg2}
      ></div>

      <div
        style={{ marginTop: "100vh" }}
        className={`noselect duration-500 bg-text-2 text-left`}
        onWheel={() => {
          bg1.current.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <h2 style={{ fontSize: "1.75rem" }} className={`tracking-widest`}>
          CREDITS
        </h2>
        <br></br>
        <h1 style={{ fontSize: "2.5rem" }} className={`tracking-widest`}>
          Heaust Azure
        </h1>
        <br></br>
        <p style={{ fontSize: "1.5rem" }} className={`tracking-widest`}>
          Creator of Emfort
        </p>
        <br></br>
        <h1 style={{ fontSize: "2.5rem" }} className={`tracking-widest`}>
          Swaggernaut65
        </h1>
        <br></br>
        <p
          id="wank"
          style={{ fontSize: "1.75rem" }}
          className={`tracking-widest`}
        >
          Owner of the<br></br>Photographic Assets
        </p>
        <br></br>
      </div>

      <div
        style={{
          marginTop: "108vh",
          transform: "translateX(-15rem)",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => {
          bg1.current.scrollIntoView();
        }}
        onWheel={() => {
          bg2.current.scrollIntoView({ behavior: "smooth" });
        }}
        className={`noselect cursor-pointer w-16 h-16 text-gray-600 border-gray-600 hover:border-white hover:text-white z-50 duration-500 bg-text-3 rounded-full`}
      >
        <h2 className={`text-3xl`}>
          <i class="fa fa-arrow-up"></i>
        </h2>
      </div>
    </div>
  );
};

export default Home;
