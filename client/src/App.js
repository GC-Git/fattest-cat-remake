import React, { Component } from 'react';
import { Nav, Hero, BGWithCurve } from './components'

import './global.css'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <BGWithCurve>
          <h1> STUFF GOES HERE </h1>
          <p>Oh look more stuff.</p>
        </BGWithCurve>
      </React.Fragment>
    );
  }
}


export default App;
