import React from 'react'
import PropTypes from 'prop-types'
import './TodaysCat.css'
import { PortraitCircle } from '../../components'

export default class TodaysCat extends React.Component {
    render() {
        return (
            <div className={"todayscat__todayscat " + this.props.className}>
                <PortraitCircle 
                className="todayscat__portrait"
                image={this.props.cat.img} 
                />
                <div className="todayscat__label">
                    <p className="todayscat__name">
                        {this.props.cat.name}
                    </p>
                    <p className="todayscat__weight">
                        {this.props.cat.weight} lbs                    
                    </p>
                    <br />
                    <a className="todayscat__details" target="_blank" rel="noopener noreferrer" href={"https://www.oregonhumane.org/adopt/details/" + this.props.cat.id}>
                        Details
                    </a>
                </div>
                
            </div>
        )
    }
}

TodaysCat.propTypes = {
    cat: PropTypes.object,
}