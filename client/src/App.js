import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isFetching: true,
      cat: null
    }
  }

  componentDidMount(){
    console.log("COMPONENTDIDMOUNT CALLED")
    fetch('/api/fatcat')
      .then(response => response.json())
      .then((cat) => {
        this.setState({cat, isFetching: false})
      })
  }

  render() {

    console.log("RENDER CALLED")

    return (
      <div className="App">
        {this.state.isFetching ? <h2>Fetching cat</h2> : <Cat cat={this.state.cat} />}
      </div>
    );
  }
}

function Cat(props){
  return (
    <div>
      <h1>{props.cat.name}</h1>
      <p>{props.cat.weight} lbs</p>
      <img src={props.cat.img} alt="Beautiful cat."/>
    </div>
  )
}

export default App;
