import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      width: 251,
      height: 325,
      borderRadius: 20,
      textAlign: "center",
      background: "#F2F2F2",
      fontFamily: "Popins",
    },
    cardBlue: {
        width: 250,
        height: 384,
        borderRadius: 20,
        background: "#407BFF",
        color: "#F2F2F2",
        fontSize: "large",
        margin: "0 auto"

    },
    bullet: {
      display: 'absolute',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 70,
      fontWeight: 600,
      height: 80,
      marginTop: 20
    },
    titleNov: {
        marginBottom: 20,
        fontWeight: 500
    },
    subtitle: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 20
    },
    text: {
      fontSize: 17,  
      fontWeight: 500,
      lineHeight: 1.8
    },
    grid: {
        textAlign: 'center',
        marginTop: 5
    }
  });

const BigCard = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <Card className={classes.cardBlue} >
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    13
                </Typography>
                <Typography className={classes.titleNov}>
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
            <Grid className={classes.grid} container spacing={3}>
                <Grid item xs={4}>
                    <DeleteOutlinedIcon />
                </Grid>
                <Grid item xs={4}>
                    <FileCopyOutlinedIcon />
                </Grid>
                <Grid item xs={4}>
                    <CreateIcon />
                </Grid>
            </Grid>
        </Card>
    )
}

export default BigCard;