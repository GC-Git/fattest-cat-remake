import React from 'react'
import {HorizontalBar} from 'react-chartjs-2';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

const styles = {
    card: {
        marginRight: 0,
    },
    catImageMd: {
        width: '75%'
    }
}


class TodaysCats extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        let catWeights = this.props.cats.map(function(cat){
            let weight = cat.weight;
            return weight;
        })

        let catNames = this.props.cats.map(function(cat){
            let name = cat.name;
            return name
        })

        const data = {
            labels: catNames,
            datasets: [
                {
                    label: 'Cat Weight',
                    backgroundColor: 'rgba(255, 88, 38,0.2)',
                    borderColor: 'rgba(255, 88, 38,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,88 , 38,0.4)',
                    hoverBorderColor: 'rgba(255, 88, 38, 1)',
                    data: catWeights
                }
            ]
        };

        return(
            <Card style={styles.card}>
                <CardContent>
                    <HorizontalBar xAxisID="Weight" height="500" data={data} />
                </CardContent>
            </Card>
            
        )
    }
}

export default TodaysCats;