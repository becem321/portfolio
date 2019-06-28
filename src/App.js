import React, { Component } from "react";
import "./App.css";
import avatar from "./images/avatar.png";
import Info from "./components/info";
import "./info.css";
import Svg from './components/svg'
import Svg2 from './components/svg2'
import ScrollMagic from 'scrollmagic';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <div className="header">
        <div id="avatar-container">
            <img id="avatar" src={avatar} alt="my Avatar" />
            </div>
            
          <div className="buttons">
          <a href="#info">
            <div className="info button">Info</div>
            </a>
            <div className="projects button">Projects</div>
          </div>
        </div>
        <Info />
      </div>
    );
  }
}

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
triggerElement: '#info'
})
.setClassToggle('#info', 'test')
.addTo(controller);


export default App;
