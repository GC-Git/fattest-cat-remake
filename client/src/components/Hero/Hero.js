import React from 'react'

import './Hero.css'

export default function Hero(props){
    return (
        <div className="hero__hero">
            <img className="hero__cat-logo" src={require('./CatLogo.png')} alt="A beautiful fat cat." />
            <h2 className="hero__header">Locally sourced obese cats</h2>
            <p className="hero__sub-header">Ethical entertainment for a modern era.</p>
            <img className="hero__scroller" src={require('./Scroll@2x.png')} alt="Indicates the page can be scrolled." />
        </div>
    )
}