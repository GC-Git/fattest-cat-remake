import React from 'react'
import './BGWithCurve.css'

export default class BGWithCurve extends React.Component {
    render() {
        let actualInnerWidth = document.body.scrollWidth

        // alert(document.documentElement.clientHeight + " " + actualInnerWidth + " " + window.innerWidth + " " + window.width)


        return(
            <div id="bgwithcurve__container">
                {/* Svg with top curve */}

                {/* TODO: Oh gurl */}
                {/* <img src={require('./TopCurve.svg')} /> */}
                <svg 
                id="bgwithcurve__topCurveSvg" 
                xmlns="http://www.w3.org/2000/svg"   
                viewBox="0 0 1907.798 167.201"
                >
                    <path 
                    id="bgwithcurve__topCurvePath" 
                    d="M0,1498.192s477.615-165.479,991.947,0,907.851,0,907.851,0v85.627H0Z" 
                    transform="translate(4 -1420.617)"
                    />
                </svg>

                

                {/* Section containing content, with the background matching the SVG color */}
                <section
                id="bgwithcurve__background"
                >
                    <div id="bgwithcurve__content">
                        {this.props.children}
                    </div>
                </section>

                <svg 
                id="bgwithcurve__bottomCurveSvg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1908 166.678"
                >
                    <path 
                    id="bgwithcurve__bottomCurvePath" 
                    d="M1900,1509.992s-477.666,164.937-992.053,0-907.948,0-907.948,0v-85.346H1900Z" transform="translate(4 -1420.645)"
                    />
                </svg>

                {/* Bottom svg with bottom curve */}
            </div>
        )
    }
  }