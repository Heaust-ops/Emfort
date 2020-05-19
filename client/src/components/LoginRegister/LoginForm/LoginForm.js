import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/authActions";
import { clearErrors } from "../../../actions/errorActions";
import { pageTo } from "../../../actions/miscActions";
import { PAGETO_PROFILE } from "../../../actions/types";
import { resetLoginRegister } from "../../../actions/loginRegisterActions";
import "./LoginForm.css";

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
  }, [stateBlink, duration, setstateBlink]);
};

const LoginForm = (props) => {
  const [loginHeadingSpread, setloginHeadingSpread] = useState(false);
  const [msg, setmsg] = useState(null);
  const [msgView, setmsgView] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userBlink, setuserBlink] = useState([null, 0, 8]);
  const [passBlink, setpassBlink] = useState([null, 0, 8]);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for Login error
    if (error.id === "LOGIN_FAIL") {
      setmsg(error.msg.msg);
      setmsgView(true);
      dispatch(clearErrors());
    } else {
      setmsg(null);
    }
  }, [error, dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setmsgView(false);
    }, 3000);
  }, [msgView, msg]);

  useEffect(() => {
    // On Succesful Authentication
    if (isAuthenticated) {
      dispatch(resetLoginRegister());
      dispatch(pageTo(PAGETO_PROFILE));
    }
  }, [isAuthenticated, dispatch]);

  useBlink(userBlink, setuserBlink);
  useBlink(passBlink, setpassBlink);

  const blinkN = (state2blink, times) => {
    if (state2blink === "userBlink")
      setuserBlink([!userBlink[0], 1, 2 * times]);
    if (state2blink === "passBlink")
      setpassBlink([!passBlink[0], 1, 2 * times]);
  };

  const headingSpread = () => {
    setloginHeadingSpread(true);
  };

  const headingUnSpread = () => {
    setloginHeadingSpread(false);
  };

  const Proceed = () => {
    if (!username) {
      blinkN("userBlink", 4);
      return;
    }
    if (!password) {
      blinkN("passBlink", 4);
      return;
    }
    dispatch(login({ username, password }));
  };

  return (
    <div id="LoginForm" className={`${props.className}`}>
      <h1
        id="login_heading"
        onMouseEnter={headingSpread}
        onMouseLeave={headingUnSpread}
        style={{ transform: "translateX(-0.5rem)" }}
        className={`${
          loginHeadingSpread ? "spread" : ""
        } LoginRegisterForm_heading cursor-default text-4xl duration-500 tracking-widest`}
      >
        LOGIN
      </h1>
      <br></br>
      <input
        size="15"
        value={username}
        maxLength={10}
        style={{ transform: "translateX(-8rem)" }}
        onChange={(event) => {
          event.persist();
          setusername(event.target.value.replace(/[^A-Za-z0-9_.]/gm, ""));
        }}
        spellCheck={false}
        className={`${
          userBlink[0] ? "warning_blink" : ""
        } text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
        type="text"
        placeholder="USERNAME"
      ></input>
      <br></br>
      <br></br>
      <input
        size="15"
        value={password}
        maxLength={18}
        style={{ transform: "translateX(-6rem)" }}
        onChange={(event) => {
          setpassword(event.target.value);
        }}
        className={`${
          passBlink[0] ? "warning_blink" : null
        } text-3xl login_input py-1 duration-500 tracking-widest text-center bg-transparent rounded-full`}
        type="password"
        placeholder="PASSWORD"
      ></input>
      <br></br>
      <br></br>
      <div className="flex flex-col justify-between">
        <button
          id="login_submit"
          onMouseEnter={headingSpread}
          onMouseLeave={headingUnSpread}
          onClick={Proceed}
          style={{ transform: "translateX(3rem)" }}
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

export default LoginForm;
