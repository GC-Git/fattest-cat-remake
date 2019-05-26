import React, { Component } from 'react';


// This component will display a Material UI CircularProgress component until the fetch is complete, then it will show the child component with the data placed into the childs [propName] prop. This lets you customize which prop will receive the data.
//TODO: Handle missing props
/** USAGE
 * <Fetcher url="/api/fatcat" propName="cat"> 
 *    <Child />
 * </Fetcher>
 * 
 * All children of Fetcher will receive a prop 'propName' containing the data from 'url'
 */


class Fetcher extends Component {

  constructor(props){
    super(props)
    this.state = {
      isFetching: true,
      fetcherData: null,
    }
  }

  componentDidMount(){
    fetch(this.props.url)
      .then(response => response.json())
      .then((fetcherData) => {
        this.setState({fetcherData, isFetching: false})
      })
  }

  render() {
    return (
        <React.Fragment>
            {this.state.isFetching ? <p>Loading..</p> : React.cloneElement(this.props.children, { [this.props.propName]: this.state.fetcherData })}
        </React.Fragment>
    );
  }
}


export default Fetcher;
