import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = (props) => {
  const [vw, setVw] = useState(window.innerWidth);
  const [vh, setVh] = useState(window.innerHeight);

  const user = useSelector((state) => state.auth.user);
  return (
    <div className={`${props.className} text-white w-screen h-screen`}>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${vw},h_${vh}/v1587117201/Emfort/assets/I_sfyrv2.jpg")`,
        }}
        className="bg-image-2 z-10 overflow-hidden w-screen h-screen"
      ></div>

      <div
        style={{ width: "30%", marginTop: "12rem" }}
        className={`noselect duration-500 bg-text-2`}
      >
        <h1 className={`text-3xl text-right`}>user: @{user.username}</h1>
        <br />
        <h1 className={`text-3xl text-left`}>authority: {user.authority}</h1>
        {user.authority === "atom" ? (
          <>
            <br />
            <input
              className={`text-black my-2 p-2 rounded border-black border-4`}
              placeholder="user"
            />
            <input
              className={`text-black my-2 p-2 rounded border-black border-4`}
              placeholder="authority"
            />
            <button
              className={`my-2 p-2 bg-black hover:font-black hover:bg-transparent hover:text-black rounded border-black border-4`}
            >
              Change Authority
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
