import React from 'react'
import { Hero, BGWithCurve, InfoCardCollection, Testimonial } from "../../components"
import './Api.css'


export default class Api extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hero 
                className="hero"
                title="API"
                subtitle="For developers"
                />

                <BGWithCurve>
                    <div className="apiPage__container">
                        <h2 className="apiPage__header">
                            Endpoints
                        </h2>
                        <ul className="apiPage__list">
                            <li className="apiPage__endpoint_list_item">
                                <a className="apiPage__endpoint_link" href="/api/fatcat">/api/fatcat</a>
                            </li>
                        </ul>
                    </div>
                </BGWithCurve>
            </React.Fragment>
        )
    }
}