import React, { Component } from 'react';
import { Nav } from './components'
import { HashRouter as Router, Route } from "react-router-dom";
import Pages from './pages'
import './global.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // A list of pages we will have on our site.
      links: [
        {
          path: "/",
          externalPath: null,
          name: "Home",
          component: Pages.Home
        },
        {
          path: "/about",
          externalPath: null,
          name: "About",
          component: Pages.About
        },
        {
          path: null,
          externalPath: "https://www.oregonhumane.org/donate/",
          name: "Donate",
          component: null
        },
        {
          // We cant use API for this page, as the actual api uses it
          path: "/developers",
          externalPath: null,          
          name: "API",
          component: Pages.Api
        }
      ]
    }
  }

  render() {

    return (
      <Router>
        
        <Nav links={this.state.links}/>  
        { 
          // Loop through each link, place a Route element for each one.
          this.state.links.map((item, index)=> {
            // Root path needs the 'exact' attribute to avoid showing up on other pages.
            if(item.path ==="/"){ return (
              <Route exact path={item.path} component={item.component} />
            )}

            return (
              <Route path={item.path} component={item.component} />
            )
          })
        }
        
      </Router>
    );
  }
}


export default App;
