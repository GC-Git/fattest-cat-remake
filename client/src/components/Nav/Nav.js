import React from 'react'
import { Link } from "react-router-dom";

import './Nav.css'

class Burger extends React.Component {
    constructor(props){
        super(props)
    }

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
                <h1 className="nav__title">Fattest Cats</h1>
                <img className="nav__title-logo-desktop" src={require("./HeadLarge.png")} alt="Cat logo" />
                <div className="spacer" />
                <Burger onClick={this.openNav} className="nav__burger"/>
                <div id="nav__burger-menu" className="nav__burger-menu sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    { this.props.links.map((item, index)=> (
                        <Link onClick={this.closeNav} to={item.path}>{item.name}</Link>
                    ))}
                </div>
                <ul className="nav__links-desktop">
                    { this.props.links.map((item, index)=> (
                        <li>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

