import React from 'react'
import { Fetcher, TodaysCat } from "../../components"
import './Home.css'

export default class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            today: new Date(),
            monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December" ],
            catData: null,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        fetch('/api/fatcat')
            .then(response => response.json())
            .then((fetcherData) => {
                
            })
    }

    render() {
        return (
            <React.Fragment>
                {/* <h2 className="homepage__header">{
                    this.state.monthNames[this.state.today.getMonth()] +
                    " " +
                    this.state.today.getDay() +
                    ", " +
                    this.state.today.getFullYear() 
                } </h2> */}

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