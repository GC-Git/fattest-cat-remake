import React from 'react'
import { Fetcher, TodaysCat } from "../../components"
import './Home.css'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* TODO: Style this */}
                <h2 style={{paddingTop: "1.5em", color: "black"}}>{new Date().toLocaleString()}</h2>

                <div className="homepage__homepage">
                    <Fetcher url="/api/fatcat" propName="cat">
                        <TodaysCat className="homepage__todays_cat" />
                    </Fetcher>                
                    <div className="homepage__weekly_cats">
                        This is an extra div that will contain a graph or some such shit.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}