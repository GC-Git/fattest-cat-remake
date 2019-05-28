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
                <p className="todayscat__name">
                    {this.props.cat.name}
                </p>
                <p className="todayscat__weight">
                    {this.props.cat.weight} lbs
                </p>
            </div>
        )
    }
}

TodaysCat.propTypes = {
    cat: PropTypes.object,
}