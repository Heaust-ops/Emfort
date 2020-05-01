import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggle_fullscreen } from "../../actions/miscActions";
import "./Home.css";

const bg1_images_home = ["assets/I_sfyrv2.jpg", "silhouette_dgk4ha.jpg"];
const bg1_image_home =
  bg1_images_home[Math.floor(Math.random() * bg1_images_home.length)];
export class Home extends Component {
  static propTypes = {
    toggle_fullscreen: PropTypes.func.isRequired,
    fullScreen: PropTypes.bool.isRequired,
  };

  state = {
    bgTextToggle1: false,
    vw: window.innerWidth,
    vh: window.innerHeight,
    isFullScreen: !window.screenTop && !window.screenY,
  };

  bgTextToggle = (which) => {
    this.setState({
      [`bgTextToggle${which}`]: !this.state[`bgTextToggle${which}`],
    });
  };

  updateOnResize = () => {
    this.setState({ isFullScreen: !window.screenTop && !window.screenY });
    if (this.state.isFullScreen !== this.props.fullScreen)
      this.props.toggle_fullscreen();
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateOnResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateOnResize);
  }

  bg2 = React.createRef();
  bg1 = React.createRef();
  scrollToMybg2 = () => window.scrollTo(0, this.bg2.current.offsetTop);

  render() {
    return (
      <div className={`${this.props.className}`}>
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${this.state.vw},h_${this.state.vh}/v1587117201/Emfort/${bg1_image_home}")`,
          }}
          className="bg-image z-10 overflow-hidden w-screen h-screen"
          onWheel={() => {
            this.bg2.current.scrollIntoView({ behavior: "smooth" });
          }}
          ref={this.bg1}
        ></div>

        <div
          onClick={() => {
            this.bgTextToggle(1);
          }}
          onWheel={() => {
            this.bg2.current.scrollIntoView({ behavior: "smooth" });
          }}
          className={`${
            this.state.bgTextToggle1 ? "focused" : ""
          } noselect z-50 duration-500 bg-text rounded-full`}
        >
          <h2>Welcome to Emfort</h2>
          <br></br>
          <h1 style={{ fontSize: "2.75rem" }}>I am Heaust Azure</h1>
          <br></br>
          <p>and this is a minimalist approach to an eCom Website</p>
        </div>
        <div
          onClick={() => {
            this.props.toggle_fullscreen();
          }}
          onWheel={() => {
            this.bg2.current.scrollIntoView({ behavior: "smooth" });
          }}
          className={`noselect cursor-pointer tracking-widest z-50 duration-500 bg-text-3 rounded-full`}
        >
          <h2>{!this.props.fullScreen ? `DIVE` : `END DIVE`}</h2>
        </div>

        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/heaust/image/upload/w_${this.state.vw},h_${this.state.vh}/v1587903988/Emfort/assets/lofi_edit_chlcr0.jpg")`,
            marginTop: "0.05rem",
          }}
          className="bg-image-2 w-screen h-screen"
          onWheel={() => {
            this.bg1.current.scrollIntoView({ behavior: "smooth" });
          }}
          ref={this.bg2}
        ></div>

        <div
          style={{ marginTop: "100vh" }}
          className={`noselect duration-500 bg-text-2 text-left`}
          onWheel={() => {
            this.bg1.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h2 style={{ fontSize: "1.75rem" }} className={`tracking-widest`}>
            CREDITS
          </h2>
          <br></br>
          <h1 style={{ fontSize: "2.5rem" }} className={`tracking-widest`}>
            Heaust Azure
          </h1>
          <br></br>
          <p style={{ fontSize: "1.5rem" }} className={`tracking-widest`}>
            Creator of Emfort
          </p>
          <br></br>
          <h1 style={{ fontSize: "2.5rem" }} className={`tracking-widest`}>
            Swaggernaut65
          </h1>
          <br></br>
          <p
            id="wank"
            style={{ fontSize: "1.75rem" }}
            className={`tracking-widest`}
          >
            Owner of the<br></br>Photographic Assets
          </p>
          <br></br>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ fullScreen: state.misc.fullScreen });
export default connect(mapStateToProps, {
  toggle_fullscreen,
})(Home);
