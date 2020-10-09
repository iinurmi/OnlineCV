import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
import profile_picture from './assets/headshot_iiro.jpg'
import HeaderComponent from './components/HeaderComponent.js'
import SideSectionComponent from './components/SideSectionComponent.js'
import MainSectionComponent from './components/MainSectionComponent.js'

import {experience} from './data/experience.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      title: 'Iiron CV',
      experienceData: experience,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
  }





  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <HeaderComponent title={this.state.title} />
          <div className="container">
            <div className="row">
              <SideSectionComponent picture={profile_picture} />
              <MainSectionComponent data={this.state.experienceData} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
