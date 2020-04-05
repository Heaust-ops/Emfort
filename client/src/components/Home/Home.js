import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

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
        <div className={`w-2/3 h-64 mx-auto`}>
          <Swiper {...params}>
            <div className={`text-white  text-center`}>
              <div className="p-5">
                <img className={`w-1/3 block mx-auto`} src={`${image_G}`}></img>
              </div>
              <div>{lorem}</div>
            </div>
            <div className={`text-white  text-center`}>
              <div className="p-5">
                <img className={`w-1/3 block mx-auto`} src={`${image_G}`}></img>
              </div>
              <div>{lorem}</div>
            </div>
            <div className={`text-white  text-center`}>
              <div className="p-5">
                <img className={`w-1/3 block mx-auto`} src={`${image_G}`}></img>
              </div>
              <div>{lorem}</div>
            </div>
            <div className={`text-white  text-center`}>
              <div className="p-5">
                <img className={`w-1/3 block mx-auto`} src={`${image_G}`}></img>
              </div>
              <div>{lorem}</div>
            </div>
          </Swiper>
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
