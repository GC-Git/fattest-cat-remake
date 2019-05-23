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
                    margin: "1.5em 1.5em 2.5em 1.5em"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                </BGWithCurve>
                <Testimonial 
                image={require('../../components/Testimonial/user_02.png')}
                quote="Possibly the most pointless website I have ever made."
                author="Gordon Delfel"
                />  
                <Testimonial 
                reverse="true"
                image={require('../../components/Testimonial/user_01.png')}
                quote="MEOW MEOW MEOW MOEW MEOW MEOW MOW MOWWWWWW"
                author="A stray cat"
                />
                <Testimonial 
                image={require('../../components/Testimonial/user_03.png')}
                quote="No thank you, I don't have any change."
                author="Some stranger"
                />  
            </React.Fragment>
        )
    }
}