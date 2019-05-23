import React from 'react'
import PropTypes from 'prop-types'
import './Hero.css'

// <Hero image={} title={} subtitle={} scroller={} />

export default class Hero extends React.Component {
    render(){
        return (
            <div className="hero__hero">
                {/* Conditionally render the passed in props. */}

                { this.props.image ? 
                <img className="hero__cat-logo" src={this.props.image} alt="A beautiful fat cat." /> 
                : null }

                { this.props.title ? 
                <h2 className="hero__header">{this.props.title}</h2>
                : null }
                
                { this.props.subtitle ?
                <p className="hero__sub-header">{this.props.subtitle}</p> 
                : null }

                { this.props.scroller ?
                <img className="hero__scroller" src={this.props.scroller} alt="Indicates the page can be scrolled." /> 
                : null}
                
            </div>
        )
    }
    
}

Hero.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    scroller: PropTypes.string
}

Hero.defaultProps = {
    title: "Hero Title",
    subtitle: "Hero subtitle."
}