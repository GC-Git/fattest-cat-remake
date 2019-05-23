import React from 'react'
import { Hero, BGWithCurve, InfoCardCollection, Testimonial } from "../../components"
import './Api.css'

export default class Api extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hero 
                title="API"
                subtitle="For developers"
                />

                <BGWithCurve>
                    <p style={{

                    }}>
                        Endpoints
                    </p>
                    <ul>
                        <li>
                            <a href="#">/api/fatcat</a>
                        </li>
                    </ul>
                </BGWithCurve>
            </React.Fragment>
        )
    }
}