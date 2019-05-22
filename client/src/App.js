import React, { Component } from 'react';
import { Nav, Hero, BGWithCurve, InfoCard, InfoCardCollection, Testimonial } from './components'

import './global.css'


class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Nav />
        <Hero />
        <BGWithCurve>
          <InfoCardCollection />
          <p style={{
            fontSize: "28px",
            alignText: "center",
            margin: "1.5em 1.5em 2.5em 1.5em"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </BGWithCurve>
        <Testimonial 
          image={require('./components/Testimonial/user_02.png')}
          quote="Possibly the most pointless website I have ever made."
          author="Gordon Delfel"
        />  
        <Testimonial 
          reverse="true"
          image={require('./components/Testimonial/user_01.png')}
          quote="MEOW MEOW MEOW MOEW MEOW MEOW MOW MOWWWWWW"
          author="A stray cat"
        />
        <Testimonial 
          image={require('./components/Testimonial/user_03.png')}
          quote="No thank you, I don't have any change."
          author="Some stranger"
        />  
      </React.Fragment>
    );
  }
}


export default App;
