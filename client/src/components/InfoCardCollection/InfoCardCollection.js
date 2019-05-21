import React from 'react'
import './InfoCardCollection.css'
import InfoCard from '../InfoCard/InfoCard'

export default class InfoCardCollection extends React.Component {
    
    render(){
        return (
            <div 
            className="infocardcollection__infocardcollection"
            >
                <InfoCard>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </InfoCard>
                <InfoCard>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </InfoCard>
                <InfoCard>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </InfoCard>
            </div>
        )
    }
}
