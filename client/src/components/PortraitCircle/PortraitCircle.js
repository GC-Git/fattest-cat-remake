import React from 'react'
import PropTypes from 'prop-types'
import './PortraitCircle.css'

export default class TodaysCat extends React.Component {
    render() {
        return (
            <div 
            className={"portraitcircle__image_cropper " + this.props.className}
            // style={{
            //     width: this.props.size,
            //     height: this.props.size,
            // }} 
            >
                <img 
                    className="portraitcircle__image"
                    src={this.props.image} 
                    alt="A circular portrait." 
                />
            </div>
        )
    }
}

TodaysCat.propTypes = {
    image: PropTypes.string,
    size: PropTypes.string
}

// TodaysCat.defaultProps = {
//     size: "100px"
// }