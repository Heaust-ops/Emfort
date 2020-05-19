import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = (props) => {
  const user = useSelector((state) => state.auth.user);
  const [username, setusername] = useState("");
  const [authority, setauthority] = useState("");
  const [updated, setupdated] = useState(false);

  useEffect(() => {
    if (updated) {
      setTimeout(() => {
        setupdated(false);
      }, 3000);
    }
  }, [updated, setupdated]);

  const changeAuthority = () => {
    // Headers
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    // Request Body
    const body = JSON.stringify({ username, authority });
    axios
      .put("api/users/update/authority", body, config)
      .then((res) => {
        if (res.data.success) setupdated(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={`${props.className} text-white w-screen h-screen`}>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${window.innerWidth},h_${window.innerHeight}/v1587117201/Emfort/assets/I_sfyrv2.jpg")`,
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
              value={username}
              onChange={(event) => setusername(event.target.value)}
              className={`text-black my-2 p-2 rounded border-black border-4`}
              placeholder="user"
            />
            <input
              value={authority}
              onChange={(event) => setauthority(event.target.value)}
              className={`text-black my-2 p-2 rounded border-black border-4`}
              placeholder="authority"
            />
            <button
              onClick={changeAuthority}
              className={`my-2 p-2 bg-black hover:font-black hover:bg-transparent hover:text-black rounded border-black border-4`}
            >
              Change Authority
            </button>
            <br />
            <p className={`text-red-400 ${updated ? "" : "hidden"}`}>Updated</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
