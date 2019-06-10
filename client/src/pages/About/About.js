import React from 'react'
import { Hero, BGWithCurve, InfoCardCollection, Testimonial } from "../../components"
// import './About.css'

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
                <p style={{
                    fontSize: "28px",
                    alignText: "center",
                    margin: "1.5em 2em 2.5em 2em",
                    textAlign: 'justify'
                }}>
                    All the cats shown here are from the Oregon Humane Society and can be adopted via their website. Each morning, we get the freshest, fattest cats at OHS and display them here for your pleasure.
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