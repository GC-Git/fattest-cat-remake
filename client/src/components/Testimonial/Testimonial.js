import React from 'react'
import PropTypes from 'prop-types';
import './Testimonial.css'

export default class Testimonial extends React.Component {
    render(){
        return(
            <div className={"testimonial__testimonial " + (this.props.reverse ? "testimonial__reverse" : "")}>
                <img 
                className="testimonial__image"
                alt="A beautiful human being." 
                src={this.props.image}
                />
                <blockquote className="testimonial__quote">
                    {"\"" + this.props.quote + "\""}
                    <footer>
                        <cite>
                            <p classname="testimonial__author">- {this.props.author}</p>
                        </cite>
                    </footer>
                </blockquote>
            </div>
        )
    }
}

Testimonial.defaultProps = {
    reverse: false
}

Testimonial.propTypes = {
    reverse: PropTypes.bool,
    image: PropTypes.string,
    quote: PropTypes.string,
    author: PropTypes.string
}