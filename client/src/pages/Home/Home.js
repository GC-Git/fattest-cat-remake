import React from 'react'
import { Fetcher, TodaysCat } from "../../components"

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Fetcher url="/api/fatcat" propName="cat">
                    <TodaysCat />
                </Fetcher>                
            </React.Fragment>
        )
    }
}