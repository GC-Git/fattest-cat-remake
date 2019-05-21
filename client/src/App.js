import React, { Component } from 'react';
import { Nav, Hero, BGWithCurve, InfoCard, InfoCardCollection } from './components'

import './global.css'


class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <BGWithCurve>
          <InfoCardCollection />>
          <p style={{
            fontSize: "35px",
            alignText: "center"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </BGWithCurve>
      </React.Fragment>
    );
  }
}


export default App;
