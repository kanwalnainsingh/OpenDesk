import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { toAbsoluteUrl } from "../../../utils/utils";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinearProgress from "@material-ui/core/LinearProgress";
import CardMedia from '@material-ui/core/CardMedia';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff"
    }
  }))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "1.25rem",
        overflow: "inherit",
        '& .MuiTypography-h5': {
            fontSize: "0.938rem",
        },
    },
    total: {
        verticalAlign: "top",
        display: "inline-block",
        float: "right",
        textAlign: "right",
        fontWeight: "400",
        lineHeight: "1.1rem",
        color: "#263238",
    }, 
    numbers: {
        marginLeft: "40%",
        marginRight: "3.649635036%",
        width: "80%",
    },
    details: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    numbers: {
        display: "inline-block",
        width: "100%",
        textAlign: "end"
    },
    numberNumbers: {
        display: "inline-block",
        verticalAlign: "top"
        // marginRight: "56.83%",
    },
    titles: {
        fontSize: "0.875rem",
        fontWeight: "500",
        // marginLeft: "25.8%"
    },
    desksNumbers:{
        textAlign: "right",
        display: "inline",
        // marginRight: "12.16545012%",
    },
    floors: {
        display: "inline-block",
        marginRight: "7.34%"
    },
    icon:{
        paddingTop: "1.57%",
        paddingRight: "1.57%",
        paddingBottom: "2.62%",
        verticalAlign: "middle",
    },
    iconSite: {
        marginTop: "-7.09%",
    },
    content: {
        marginTop: "-15%",
    },
    bar: {

    }
}));

export default function SiteCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.root}>
        <img
              className={classes.iconSite}
              src={toAbsoluteUrl("/media/organization/site/icons/building.svg")}
        />
        <CardHeader className={classes.total}
        title= {  props.siteInformation ? "Total Opendesks: "  + props.siteInformation.desks : ""}
        />
        
        <CardContent className={classes.content}>
            <div className={classes.numbers} >
                <div className={classes.details}>
                    <div className={classes.numberNumbers} style={{verticalAlign: "top"}}>
                    { props.siteInformation ? props.siteInformation.booked : ""} <br/> 
                    <div className={classes.titles} style={{fontSize: "0.875rem"}}>
                        Booked Desks
                    </div>
                    </div>
                    <div className={classes.numberNumbers} style={{verticalAlign: "top"}}>
                        { props.siteInformation ? props.siteInformation.available : ""} <br/>
                        <div className={classes.titles} style={{fontSize: "0.875rem"}}> 
                            Available Desks 
                        </div> 
                    </div>
                </div>
                
            </div>
            {/* <div className={classes.titles}>
                    <div className={classes.desksNumbers} style={{float: 'left'}}>
                        Booked Desks
                    </div>
                    <div className={classes.desksNumbers} style={{marginLeft: "20.9%"}}>
                        Available Desks
                    </div>
            </div> */}
            <div className={classes.bar}>
                <BorderLinearProgress variant="determinate" value={ props.siteInformation.booked * 100 / props.siteInformation.desks } />
            </div>
        </CardContent>
    </Card>
  );
}
