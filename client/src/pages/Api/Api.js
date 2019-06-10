import React from 'react'
import { Hero, BGWithCurve } from "../../components"
import './Api.css'


export default class Api extends React.Component {
    constructor(props){
        super(props)

        let today = new Date();
        let oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

        this.state = { today, oneWeekAgo }
    }

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
                                <p className="apiPage__endpoint_label">
                                    Cat by ID:
                                </p>
                                <a className="apiPage__endpoint_link" href="/api/cats/week">/api/catId/148184</a>               
                            </li>

                            <li className="apiPage__endpoint_list_item">
                                <p className="apiPage__endpoint_label">
                                    Todays fat cat:
                                </p>
                                <a className="apiPage__endpoint_link" href="/api/fatcat">/api/fatcat</a>
                            </li>

                            <li className="apiPage__endpoint_list_item">
                                <p className="apiPage__endpoint_label">
                                    Fattest cat of given date:
                                </p>
                                <a className="apiPage__endpoint_link" href={"/api/fatcat/" + this.state.today}>/api/fatcat/:date</a>
                            </li>

                            <li className="apiPage__endpoint_list_item">
                                <p className="apiPage__endpoint_label">
                                    Fattest cat of a date range:
                                </p>
                                <a className="apiPage__endpoint_link" href={"/api/fatcat/range/" + this.state.oneWeekAgo + "/" + this.state.today}>/api/fatcat/range/:dateStart/:dateEnd</a>                                
                            </li>

                            <li className="apiPage__endpoint_list_item">
                                <p className="apiPage__endpoint_label">
                                    All cats today:
                                </p>
                                <a className="apiPage__endpoint_link" href="/api/cats">/api/cats</a>     
                            </li>

                            <li className="apiPage__endpoint_list_item">
                                <p className="apiPage__endpoint_label">
                                    All cats of a given day:
                                </p>
                                <a className="apiPage__endpoint_link" href={"/api/cats/day/" + this.state.today}>/api/cats/day/:date</a>
                            </li>

                            <li className="apiPage__endpoint_list_item">
                                <p className="apiPage__endpoint_label">
                                    All cats of a date range:
                                </p>
                                <a className="apiPage__endpoint_link" href={"/api/cats/range/" + this.state.oneWeekAgo + "/" + this.state.today}>/api/cats/range/:dateStart/:dateEnd</a>
                            </li>
                        </ul>
                    </div>
                </BGWithCurve>
            </React.Fragment>
        )
    }
}