import React, { Component } from 'react';
import { Nav, Hero, BGWithCurve, InfoCard } from './components'

import './global.css'

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <BGWithCurve>
          <InfoCard>
            <p>The caption goes here!</p>
          </InfoCard>
        </BGWithCurve>
      </React.Fragment>
    );
  }
}


export default App;
