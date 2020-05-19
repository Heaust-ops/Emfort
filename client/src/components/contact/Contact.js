import React from "react";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className={`${props.className} text-white w-screen h-screen`}>
      <div
        style={{
          backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${window.innerWidth},h_${window.innerHeight}/v1587117201/Emfort/assets/tree-min_zs5uzl.jpg")`,
        }}
        className="bg-image-2 z-10 overflow-hidden w-screen h-screen"
      ></div>

      <div
        style={{ marginTop: "12rem" }}
        className={`noselect duration-500 bg-text-4`}
      >
        <h2
          style={{ fontSize: "1.75rem" }}
          className={`contact_heading tracking-widest`}
        >
          CONTACT
        </h2>
        <br></br>
        <h1
          style={{ fontSize: "2.5rem" }}
          className={`tracking-widest duration-500 hover:text-blue-400 text-blue-600`}
        >
          Heaust Azure
        </h1>
        <br></br>
        <p
          style={{ fontSize: "1.5rem" }}
          className={`tracking-widest text-red-400`}
        >
          Instagram:{" "}
          <a
            className={"hover:text-white text-blue-400 duration-500"}
            href="http://www.instagram.com/aryaj.singh"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aryaj.singh
          </a>
          <br />
          Email:{" "}
          <span className="allowSelect text-blue-400">
            heaust.ops@gmail.com
          </span>
          <br />
          Github:{" "}
          <a
            className={"hover:text-white text-blue-400 duration-500"}
            href="https://github.com/Heaust-ops/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heaust-ops
          </a>
          <br />
          LinkedIn:{" "}
          <a
            className={"hover:text-white text-blue-400 duration-500"}
            href="https://www.linkedin.com/in/heaust/"
            target="_blank"
            rel="noopener noreferrer"
          >
            heaust
          </a>
        </p>
        <br></br>
        <h1
          style={{ fontSize: "2.5rem" }}
          className={`tracking-widest duration-500 hover:text-red-400 text-red-600`}
        >
          Swaggernaut65
        </h1>
        <br></br>
        <p
          style={{ fontSize: "1.75rem" }}
          className={`tracking-widest text-red-400`}
        >
          Instagram:{" "}
          <a
            className={"hover:text-white text-blue-400 duration-500"}
            href="http://www.instagram.com/swaggernaut65"
            target="_blank"
            rel="noopener noreferrer"
          >
            @swaggernaut65
          </a>
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default Contact;
