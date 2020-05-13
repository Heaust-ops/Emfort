import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearAuth } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";
import "./RegisterForm.css";
import { REGISTER_START } from "../../../actions/types";

const RegisterForm = (props) => {
  const [registerHeadingSpread, setregisterHeadingSpread] = useState(false);
  const [msg, setmsg] = useState(null);
  const [msgView, setmsgView] = useState(null);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [userBlink, setuserBlink] = useState([null, 0, 8]);
  const [passBlink, setpassBlink] = useState([null, 0, 8]);
  const [emailBlink, setemailBlink] = useState([null, 0, 8]);
  const [passShow, setpassShow] = useState(null);

  const error = useSelector((state) => state.error);
  const regmsg = useSelector((state) => state.auth.msg);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const passInput = useRef();

  useEffect(() => {
    // Check for Register error
    if (error.id === "REGISTER_FAIL") {
      setmsg(error.msg.msg, () => {
        setTimeout(() => {
          setmsgView(false);
        }, 3000);
      });
      setmsgView(true, () => {
        setTimeout(() => {
          setmsgView(false);
        }, 3000);
      });
      dispatch(clearErrors());
    } else {
      setmsg(null);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (typeof regmsg !== "undefined" && regmsg === "Registration Successful") {
      setusername("Hi!");
      setemail(`Please Check Your mail and verify it!`);
      setpassword("Thank You!");
      setpassShow(true);
      clearAuth();
    }
  }, [regmsg]);

  const togglePassShow = () => {
    setpassShow(!passShow);
  };

  useEffect(() => {
    if (userBlink[1] !== 0) {
      if (userBlink[1] === userBlink[2]) setuserBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          setuserBlink([!userBlink[0], userBlink[1] + 1, userBlink[2]]);
        }, 300);
      }
    }
  }, [userBlink]);

  useEffect(() => {
    if (passBlink[1] !== 0) {
      if (passBlink[1] === passBlink[2]) setpassBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          setpassBlink([!passBlink[0], passBlink[1] + 1, passBlink[2]]);
        }, 300);
      }
    }
  }, [passBlink]);

  useEffect(() => {
    if (emailBlink[1] !== 0) {
      if (emailBlink[1] === emailBlink[2]) setemailBlink([null, 0, 8]);
      else {
        setTimeout(() => {
          setemailBlink([!emailBlink[0], emailBlink[1] + 1, emailBlink[2]]);
        }, 300);
      }
    }
  }, [emailBlink]);

  const blinkN = (state2blink, times) => {
    if (state2blink === "userBlink")
      setuserBlink([!userBlink[0], 1, 2 * times]);
    if (state2blink === "passBlink")
      setpassBlink([!passBlink[0], 1, 2 * times]);
  };

  const headingSpread = () => {
    setregisterHeadingSpread(true);
  };

  const headingUnSpread = () => {
    setregisterHeadingSpread(false);
  };

  const Proceed = () => {
    if (!username.match(/^[A-Za-z0-9_.]+$/g)) {
      blinkN("userBlink", 4);
      return;
    }
    if (
      !email ||
      !email.match(
        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g
      )
    ) {
      blinkN("emailBlink", 4);
      return;
    }
    if (!password) {
      blinkN("passBlink", 4);
      return;
    }
    dispatch(register({ username, email, password }));
  };

  return (
    <div id="RegisterForm" className={`${props.className}`}>
      <h1
        id="register_heading"
        onMouseEnter={headingSpread}
        onMouseLeave={headingUnSpread}
        style={{ transform: "translateX(-2.5rem)" }}
        className={`${
          registerHeadingSpread ? "spread" : ""
        } LoginRegisterForm_heading cursor-default text-4xl duration-500 tracking-widest`}
      >
        REGISTER
      </h1>
      <br></br>
      <div
        style={{ transform: "translateX(-10rem)" }}
        className={`pr-${
          email.length > 19 ? `16` : `3`
        } m-0 p-0 flex block justify-between`}
      >
        <input
          size="15"
          value={username}
          maxLength={10}
          onChange={(event) => {
            setusername(event.target.value.replace(/[^A-Za-z0-9_.]/gm, ""));
          }}
          spellCheck={false}
          className={`${
            userBlink[0] ? "warning_blink" : ""
          } text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
          type="text"
          placeholder="USERNAME"
        ></input>
        {isLoading === REGISTER_START ? (
          <img
            id={`loading_logo`}
            src={`https://res.cloudinary.com/heaust/image/upload/w_66,h_66/v1587886495/HeaustBrand/Logos/logo4_y3zrum.svg`}
            className={`w-12 h-12 left-0 loading_logo inline-block`}
            alt="Loading"
          ></img>
        ) : null}
      </div>
      <br></br>
      <input
        size={
          email.length > 19
            ? `${email.length > 23 ? `${email.length > 27 ? 35 : 28}` : `23`}`
            : `20`
        }
        value={email}
        onChange={(event) => {
          setemail(event.target.value);
        }}
        spellCheck={false}
        style={{
          transform: `translateX(${email.length > 19 ? "-10rem" : "-8rem"})`,
        }}
        className={`${
          email.length > 23
            ? `${email.length > 27 ? `text-xl py-4` : `text-2xl py-3`}`
            : "text-3xl"
        } ${
          emailBlink[0] ? "warning_blink" : null
        } register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
        type="text"
        placeholder="Email@Domain.com"
      ></input>
      <br></br>
      <br></br>
      <i
        style={{ transform: "translateX(-6rem)" }}
        onClick={() => {
          togglePassShow();
          passInput.current.focus();
        }}
        className={`nav-open text-4xl pass_show_eye mt-1 duration-500 fa fa-eye lg`}
      ></i>
      <input
        size="15"
        ref={passInput}
        value={password}
        maxLength={18}
        onChange={(event) => {
          setpassword(event.target.value);
        }}
        spellCheck={false}
        style={{ transform: "translateX(-4.5rem)" }}
        className={`${
          passBlink[0] ? "warning_blink" : null
        } text-3xl register_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
        type={passShow ? "text" : "password"}
        placeholder={`PASSWORD`}
      ></input>
      <br></br>
      <br></br>
      <div className="flex flex-col justify-between">
        <button
          id="register_submit"
          onMouseEnter={headingSpread}
          onMouseLeave={headingUnSpread}
          onClick={Proceed}
          style={{ transform: "translateX(6.7rem)" }}
          className="text-3xl LoginRegisterForm_submit mt-2 text-gray-600 hover:text-white py-2 px-6 rounded-full rounded-bl-full duration-500 tracking-widest text-center bg-transparent"
        >
          PROCEED
        </button>
        <h1
          style={{ transform: "translateX(-5rem)" }}
          className={`${
            msgView ? "opacity-100" : "opacity-0"
          } tracking-widest duration-500 text-red-400 mt-6 text-xl`}
        >
          {msg}
        </h1>
      </div>
    </div>
  );
};

export default RegisterForm;
