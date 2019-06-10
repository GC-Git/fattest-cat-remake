import React from 'react'
import { Hero, BGWithCurve, InfoCardCollection, Testimonial } from "../../components"
import './About.css'

export default class About extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Hero
                title="Locally sourced obese cats"
                subtitle="Ethical entertainment for a modern era."
                image={require("../../assets/heroImage.png")}
                scroller={require('../../assets/heroScroller.png')}
                />

                <BGWithCurve>
                <InfoCardCollection />
                <p className="infocardcollection__text">
                    All the cats shown on this site are courtesy of the Oregon Humane Society. Each morning, we get the fattest cat at OHS and display it here for your pleasure. The fattest cat of the day is displayed along side a chart showing the history of the cats weight. One of these ham beasts catch your eye? Click 'Details' under the cats image to go to its page at the Oregon Humane Society, where you can begin the adoption process!
                </p>
                </BGWithCurve>
                <Testimonial 
                image={require('../../assets/Testimonial-001.svg')}
                quote="Possibly the most pointless website I have ever made."
                author="Gordon Delfel"
                />  
                <Testimonial 
                reverse="true"
                image={require('../../assets/Testimonial-003.svg')}
                quote="MEOW MEOW MEOW MOEW MEOW MEOW MOW MOWWWWWW"
                author="A stray cat"
                />
                <Testimonial 
                image={require('../../assets/Testimonial-002.svg')}
                quote="No thank you, I don't have any change."
                author="Some stranger"
                />  
            </React.Fragment>
        )
    }
}