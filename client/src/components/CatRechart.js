import React from 'react'
import {LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import PropTypes from 'prop-types'
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
  

const data = [
    { x: '06-09', fluffy: 2.978, meow: 2.893},
    { x: '06-10', fluffy: 2.973, meow: 2.895},
    { x: '06-11', fluffy: 2.964, meow: 2.900},
    { x: '06-12', fluffy: 2.955, meow: 2.905},
    { x: '06-13', fluffy: 2.937, meow: 2.908},
    { x: '06-14', fluffy: 2.919, meow: 2.930},
    { x: '06-15', fluffy: 2.902, meow: 2.952},
];


class CatRechart extends React.Component {

    render() {
        console.log(this.props.cats)
        return (
            <ResponsiveContainer
                width="100%"
            >
                <LineChart
                    onClick={this.logEvent}
                    data={data}
                    margin={{top: 35, right: 35, left: 35, bottom: 35}}>
                <XAxis 
                    dataKey="x"
                    fontFamily="sans-serif"
                    fontSize='8pt'
                />
                <YAxis
                    domain={['dataMin', 'dataMax']}
                    ticks={[2.882, 2.905, 2.928, 2.951, 2.974, 2.997]}
                />
                <CartesianGrid 
                    vertical={false}
                    stroke="#ebf3f0"
                />
                <Tooltip />
                <Line 
                    dataKey="fluffy" 
                    dot={true}
                />
                <Line 
                    dataKey="meow" 
                    dot={true}
                    />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default CatRechart