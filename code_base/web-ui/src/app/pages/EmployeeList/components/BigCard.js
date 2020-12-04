import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      width: 251,
      height: 325,
      borderRadius: 20,
      textAlign: "center",
      background: "#F2F2F2",
      fontFamily: "Popins"
    },
    bullet: {
      display: 'absolute',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 70,
      fontWeight: 600,
      marginBottom: 0
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 30
    },
    text: {
      fontSize: 17,  
      fontWeight: 500,
      lineHeight: 1.8
    },
  });

const BigCard = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
            13
        </Typography>
        <Typography >
            Nov,Wed
        </Typography>
        <Typography className={classes.subtitle}>
            Desk 3A
        </Typography>
        <Typography lineHeight="1.9" className={classes.text}>
            3rd Floor
        </Typography>
        <Typography className={classes.text}>
            2464 Royal Ln. Mesa, <br/> New Jersey 45463
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    )
}

export default BigCard;