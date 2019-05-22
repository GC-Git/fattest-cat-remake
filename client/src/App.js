import React, { Component } from 'react';
import { Nav } from './components'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pages from './pages'
import './global.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      links: [
        {
          path: "/",
          name: "Home",
          component: Pages.Home
        },
        {
          path: "/about",
          name: "About",
          component: Pages.About
        },
        {
          path: "/donate",
          name: "Donate",
          component: Pages.Donate
        },
        {
          // We cant use API for this page, as the actual api uses it
          path: "/developers",
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
        {this.state.links.forEach((value)=>{
          if(value.path === "/"){
            return (
              <Route exact path={value.path} component={value.component} />
            )
          } else {
            return (
              <Route path={value.path} component={value.component} />
            )
          }
        })}



        
        { this.state.links.map((item, index)=> (
          <Route path={item.path} component={item.component} />
        ))}
        
      </Router>
    );
  }
}


export default App;
