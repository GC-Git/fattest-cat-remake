import React from 'react'
import './InfoCard.css'

export default class InfoCard extends React.Component {
    
    render(){
        return (
            <div 
            className="infocard__infocard"
            id={this.props.id ? this.props.id : ""}
            >
                <div className="infocard__image-wrapper">
                    {/* Image */}
                    <img className="infocard__image" src={this.props.img} />
                    {/* Label */}
                    <p className="infocard__image-label">{this.props.label}</p>
                </div>
                <div className="infocard__caption">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

InfoCard.defaultProps = {
    img: require('./CatAero.svg'),
    label: "Aerodynamic"
}
