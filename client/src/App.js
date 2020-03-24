import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Navbar from './components/NavTwist/navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
import './App.css';

function App() {

  return (
    <Provider store={store}>
    <div className='App overflow-x-hidden'>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
    </Provider>
  );
}

export default App;

