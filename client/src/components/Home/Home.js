import React, { Component } from "react";
import "swiper/css/swiper.css";
import './Home.css';

export class Home extends Component {
  state = {
    bgTextToggle: false
  }

  bgTextToggle = () => {
    this.setState({bgTextToggle: !this.state.bgTextToggle});
  }

  render() {

    return (
      <div className={`${this.props.className}`}>
        
<div style={{backgroundImage: `url("/images/silhouette.jpg")`}} className="bg-image w-screen h-screen"></div>

<div onClick={this.bgTextToggle} className={`${this.state.bgTextToggle ? 'focused' : ''} noselect duration-500 bg-text rounded-full`}>
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

export default Home;
