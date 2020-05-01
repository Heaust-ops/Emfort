import React, { Component } from "react";
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

class App extends Component {
  state = {
    fullScreen: false,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ fullScreen: true });
    // }, 500);

    store.dispatch(loadUser());

    store.subscribe(() => {
      let n = 1;
      if (n === 1) {
        n = 0;
        this.setState({ fullScreen: store.getState().misc.fullScreen }, () => {
          n = 1;
        });
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Fullscreen enabled={this.state.fullScreen}>
          <div id="App" className="App overflow-x-hidden h-screen">
            <TitleHandler></TitleHandler>
            <Navbar></Navbar>
            <LoginRegister className="noselect fixed top-0 right-0 w-3/4 z-10 h-full"></LoginRegister>
            <Main
              style={{ height: "200%" }}
              giveFullScreen={this.getFullScreen}
            ></Main>
            <Footer className="noselect"></Footer>
          </div>
        </Fullscreen>
      </Provider>
    );
  }
}

export default App;
