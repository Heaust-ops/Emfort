import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/NavTwist/navbar/Navbar";
import Main from "./components/Main/Main";
import TitleHandler from "./components/TitleHandler/TitleHandler";
import Footer from "./components/footer/Footer";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { loadUser } from "./actions/authActions";
import Fullscreen from "react-full-screen";
import "./App.css";

const App = () => {
  const [fullScreen, setfullScreen] = useState(false);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      let n = 1;
      if (n === 1) {
        n = 0;
        setfullScreen(store.getState().misc.fullScreen, () => {
          n = 1;
        });
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <Fullscreen enabled={fullScreen}>
        <div id="App" className="App overflow-x-hidden h-screen">
          <TitleHandler />
          <Navbar />
          <LoginRegister className="noselect fixed top-0 right-0 w-3/4 z-10 h-full" />
          <Main style={{ height: "200%" }} />
          <Footer className="noselect" />
        </div>
      </Fullscreen>
    </Provider>
  );
};

export default App;
