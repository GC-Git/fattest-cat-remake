import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';


function Cat(props){

    const styles = {
        card: {
            // marginTop: 20,
            // marginLeft: 20,
            // maxWidth: 350
        },
        catImageMd: {
            width: '75%',
            maxHeight: '75vh',
            margin: 'auto'
        }
    }
  
    return (
      <React.Fragment>
          <Card style={styles.card}>
                <CardContent>
                    <Typography align="center" color="inherit" variant="display1">
                        <Link color="inherit" href={"https://www.oregonhumane.org/adopt/details/"+ props.cat.id +"/"}>
                        {props.cat.name}
                        </Link>
                    </Typography>
                </CardContent>
                <CardMedia image={props.cat.img} style={styles.catImageMd} component='img' alt='Beautiful cat.' title='Beautiful cat.' />
                <CardContent>
                    <Typography align="center" color="inherit" variant="subtitle2">
                        {props.cat.weight} lbs
                    </Typography>
                </CardContent>
          </Card>
      </React.Fragment>
    )
  }

  export default Cat;