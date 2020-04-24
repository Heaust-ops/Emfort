import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/NavTwist/navbar/Navbar";
import Main from "./components/Main/Main";
import TitleHandler from "./components/TitleHandler/TitleHandler";
import Footer from "./components/footer/Footer";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { loadUser } from "./actions/authActions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div id="App" className="App overflow-x-hidden h-screen">
          <TitleHandler></TitleHandler>
          <Navbar></Navbar>
          <LoginRegister className="noselect fixed top-0 right-0 w-3/4 z-10 h-full"></LoginRegister>
          <Main style={{ height: "200%" }}></Main>
          <Footer className="noselect"></Footer>
        </div>
      </Provider>
    );
  }
}

export default App;
