import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: 0,
      boxShadow: "none",
      borderBottom: ".5px solid #C4C4C4",
      borderTop: ".5px solid #C4C4C4"
    },
    header: {
        display: 'flex',
        justifyContent: "space-between",
        alignContent: "top",
        padding: '16px 5px 0 16px',
        '& p': {
            fontWeight: 500,
        }
    },
    content: {
        padding: '0 16px 16px 16px',
    },
    button: {
        padding: 0,
        height: 'fit-content'
    }
  }));

const SmallCard = () => {
    const classes = useStyles();
  
    return(
        <Card className={classes.root}>
         
            <CardContent className={classes.header}>
                <Typography fontWeight="500"  component="p">
                13 November, Wednesday <br/> DESK 2A, Floor 3
                </Typography>
                <IconButton aria-label="settings" height="fit-content" className={classes.button}>
                    <MoreVertIcon />
                </IconButton>
            </CardContent>
               
            
           
            
            <CardContent className={classes.content}>
                <Typography variant="body2" color="textSecondary" component="p">
                2464 Royal Ln. Mesa, New Yersey <br/> 45463
                </Typography>
            </CardContent>
        </Card>
    )
};

export default SmallCard;