import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

import './Nav.css'

class Burger extends React.Component {

    render(){
        let divStyle = {
            width: "35px",
            height: "4px",
            backgroundColor: "#594949",
            margin: "5px 0",
            borderRadius: "60px"
        }
        return (
            <div 
            onClick={this.props.onClick ? this.props.onClick : null} 
            className={this.props.className}
            >
                <div style={divStyle}></div>
                <div style={divStyle}></div>
                <div style={divStyle}></div>
            </div>
        )
    }
}

export default class Nav extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        if(!props.links){throw new Error("Missing required 'links' prop.")}
    }

    openNav() {
        console.log(document.getElementById("nav__burger-menu"))
        document.getElementById("nav__burger-menu").style.width = "100%";
    }

    closeNav() {
        document.getElementById("nav__burger-menu").style.width = "0";
    }

    render(){
        return(
            <nav className="nav__nav">
                {/* Title + Logo */}
                <h1 className="nav__title">Fattest Cats</h1>
                <img className="nav__title-logo-desktop" src={require("./HeadLarge.png")} alt="Cat logo" />
                <div className="spacer" />

                {/* Mobile nav */}
                <Burger onClick={this.openNav} className="nav__burger"/>
                <div id="nav__burger-menu" className="nav__burger-menu sidenav">
                    
                     {/* eslint-disable-next-line */}
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>

                    {/* Creates the links for mobile nav. */}
                    { this.props.links.map((item, index)=> {
                        if(item.externalPath){
                            return (
                                <a href={item.externalPath}>{item.name}</a>
                            )
                        }

                        return (
                            <Link onClick={this.closeNav} to={item.path}>{item.name}</Link>
                        )
                        
                    })}
                </div>

                {/* Desktop nav */}
                <ul className="nav__links-desktop">
                    { this.props.links.map((item, index)=> {
                        // Check for an external path
                        if(item.externalPath){
                            return (
                                <li>
                                    <a href={item.externalPath} target="_blank" rel="noopener noreferrer">{item.name}</a>
                                </li>
                            )
                        }
                        
                        return (
                            <li>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        )
                        
                    })}
                </ul>
            </nav>
        )
    }
}

Nav.propTypes = {
    // links: [
    //     {
    //       path: "/",
    //       externalPath: null,
    //       name: "Home",
    //       component: Pages.Home
    //     },
    //     {
    //       path: "/about",
    //       externalPath: null,
    //       name: "About",
    //       component: Pages.About
    //     },
    //     {
    //       path: null,
    //       externalPath: "https://www.oregonhumane.org/donate/",
    //       name: "Donate",
    //       component: Pages.Donate
    //     },
    //     {
    //       path: "/developers",
    //       externalPath: null,          
    //       name: "API",
    //       component: Pages.Api
    //     }
    //   ]
    links: PropTypes.array
}