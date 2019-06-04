import React from 'react'
import PropTypes from 'prop-types'
import {Line} from 'react-chartjs-2';
import './CatGraph.css'


export default class CatGraph extends React.Component {

    // Returns the passed in maximum for the Y axis unless the largest value is bigger than the max, in which case it returns the largest value + 5
    getSuggestedMax(yAxisMax = 25){
        let maxWeight = Math.max.apply(null, this.props.data)

        if (maxWeight > yAxisMax){
            return maxWeight + 5
        } else {
            return yAxisMax
        }
    }

    getSuggestedMin(yAxisMin = 15){
        let minWeight = Math.min.apply(null, this.props.data)

        if (minWeight < yAxisMin){

            if(minWeight <= 5){
                return 0;
            } else {
                return minWeight - 5
            }

            
        } else {
            return yAxisMin
        }
    }

    render(){
        return(
            <Line 
            // For options: https://www.chartjs.org/docs/latest/axes/cartesian/linear.html 
            options={{
                responsive: true,
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: this.getSuggestedMin(),    // minimum will be 0, unless there is a lower value.
                            suggestedMax: this.getSuggestedMax() 
                        }
                    }]
                }
            }}
            height="250"
            data={{
                labels: this.props.axisLabels,
                datasets: [
                    {
                        label: this.props.label,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(89, 73, 73,0.4)',
                        borderColor: 'rgba(89, 73, 73,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(89, 73, 73,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(89, 73, 73,1)',
                        pointHoverBorderColor: 'rgba(89, 73, 73,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.props.data
                    }
                ]
            }} />
        )
    }
}

CatGraph.propTypes = {
    label: PropTypes.string,
    axisLabels: PropTypes.array,
    data: PropTypes.array
}