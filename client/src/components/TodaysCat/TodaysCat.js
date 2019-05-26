import React from 'react'
import PropTypes from 'prop-types'
import './TodaysCat.css'
import { PortraitCircle } from '../../components'

export default class TodaysCat extends React.Component {
    render() {
        return (
            <div className="todayscat__todayscat">
                <PortraitCircle 
                className="todayscat__portrait"
                // size="100px"
                image={this.props.cat.img} 
                />
            </div>
        )
    }
}

TodaysCat.propTypes = {
    cat: PropTypes.object,
}