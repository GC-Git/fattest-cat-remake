import React, { Component } from 'react';
import { Nav, Hero } from './components'

import './global.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Hero />
      </React.Fragment>
    );
  }
}


export default App;
