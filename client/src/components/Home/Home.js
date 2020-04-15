import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import Parallax from 'react-rellax';
import './Home.css';

export class Home extends Component {
  render() {
    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: '.swiperjs-pagination',
        type: 'bullets',
        clickable: true
      }
    };

    return (
      <div className={`${this.props.className}`}>
        
<div style={{backgroundImage: `url("/images/silhouette.jpg")`}} className="bg-image w-screen h-screen"></div>

<div className="noselect bg-text">
  <h2>Welcome to Emfort</h2>
  <br></br>
  <h1 style={{fontSize:"2.75rem"}}>I am Heaust Azure</h1>
  <br></br>
  <p>and this is a minimalist approach to an eCom Website</p>
</div>
      </div>
    );
  }
}

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const image_G =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png";
const back = { backgroundImage: `url(${image_G})` };

export default Home;
