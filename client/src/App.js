import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Cat from './components/Cat'
import Fetcher from './components/Fetcher'
import TodaysCats from './components/TodaysCats'
import Grid from '@material-ui/core/Grid'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: '#f44336',
    },
  },
});


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isFetching: true,
      cat: null,
    }
  }

  componentDidMount(){
    fetch('/api/fatcat')
      .then(response => response.json())
      .then((cat) => {
        this.setState({cat, isFetching: false})
      })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Grid container spacing={0}>
          <Grid item md={6}>
            <Fetcher url="/api/fatcat" propName="cat">
              <Cat />
            </Fetcher>  
          </Grid>
          <Grid item md={6}>
            <Fetcher url="/api/cats" propName="cats">
              <TodaysCats />
            </Fetcher>
          </Grid>
        </Grid>
        
        
      </MuiThemeProvider>
    );
  }
}


export default App;
