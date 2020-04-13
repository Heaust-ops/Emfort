import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/NavTwist/navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
import LoginRegister from './components/LoginRegister/LoginRegister';
import './App.css';

function App() {

  return (
    <Provider store={store}>
    <div id="App" className='App overflow-x-hidden h-screen'>
      <Navbar></Navbar>
      <LoginRegister className="fixed top-0 right-0 w-3/4 z-10 h-full"></LoginRegister>
      <Main style={{height: '200%'}}></Main>
      <Footer></Footer>
    </div>
    </Provider>
  );
}

export default App;

