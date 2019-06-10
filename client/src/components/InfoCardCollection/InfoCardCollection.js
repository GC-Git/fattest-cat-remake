import React from 'react'
import './InfoCardCollection.css'
import InfoCard from '../InfoCard/InfoCard'

export default class InfoCardCollection extends React.Component {
    
    render(){
        return (
            <div 
            className="infocardcollection__infocardcollection"
            >
                <InfoCard img={require('../../assets/CleaningCat.svg')} label="Self-Cleaning">
                    <p>Kittens begin self-grooming as early as 4 weeks, and social grooming by 5 weeks. By adulthood, cats spend nearly half their time grooming themselves and others.</p>
                </InfoCard>
                <InfoCard img={require('../../assets/SleepingCat.svg')} label="Low-Maintenence">
                    <p>Cats spend between 12 and 16 hours a day sleeping and they do not need to be taken out to use the bathroom. Besides petting and feeding, there is very little maintenance.</p>
                </InfoCard>
                <InfoCard img={require('../../assets/BoxCat.svg')} label="Portable">
                    <p>Cats love small enclosed spaces like boxes or suitcases. In addition, due to their predatory nature, they also serve as a sort of built in security for your belongings.</p>
                </InfoCard>
            </div>
        )
    }
}
