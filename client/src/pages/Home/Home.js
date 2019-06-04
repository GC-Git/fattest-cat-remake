import React from 'react'
import { Fetcher, TodaysCat, CatGraph } from "../../components"
import './Home.css'

export default class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            today: new Date(),
            catData: null,
            graphData: [],
            graphDataLabel: null,
            graphAxisLabels: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    formatDate(date) {
        var monthNames = [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
      
        return monthNames[monthIndex] + " " + day;
    }

    convertCatDataToGraphData(){

        // Set the label for the graph, which is just the cats name
        this.setState({graphDataLabel: this.state.catData[0].data[0].name})

        // Loop through each day, formatting the date for the graph label and adding the cats weight to graphData 
        for(let day of this.state.catData) {
            let date = this.formatDate(new Date(day.date));
            let weight = day.data[0].weight

            this.setState({
                graphData: [...this.state.graphData, weight],
                graphAxisLabels: [...this.state.graphAxisLabels, date]
            })
        }
    }

    loadData() {
        fetch('/api/fatcat')
            .then(response => response.json())
            .then((catDataToday) => {
                fetch('/api/catId/'+ catDataToday.id)
                    .then(response => response.json())
                    .then(catData => {
                        // catData contains the raw data retrieved from the fetch request
                        this.setState({catData})
                        this.convertCatDataToGraphData()
                    })
            })
    }

    render() {
        if (!this.state.catData) {
            return <div />
        }

        return (
            <React.Fragment>
                {/* SRC: https://stackoverflow.com/questions/35022922/how-can-i-block-a-react-component-to-be-rendered-until-i-fetched-all-information */}
                <div className="homepage__homepage">
                    <TodaysCat className="homepage__todays_cat" cat={this.state.catData[this.state.catData.length - 1].data[0]}/>
                    {/* 
                        <SingleCatGraph data={this.state.catData} />
                        */}
                    <div className="homepage__weekly_cats">
                        <CatGraph 
                            label={this.state.graphDataLabel} 
                            axisLabels={this.state.graphAxisLabels} 
                            data={this.state.graphData} 
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}