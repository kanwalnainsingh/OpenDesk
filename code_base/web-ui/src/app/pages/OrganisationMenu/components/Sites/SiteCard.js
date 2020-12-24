import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { toAbsoluteUrl } from "../../../../utils/utils";
import LinearProgress from "@material-ui/core/LinearProgress";

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
      backgroundColor: "#407BFF",
    }
  }))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "12.701%",
        borderRadius: "1.25rem",
        overflow: "inherit",
        '& .MuiTypography-h5': {
            fontSize: "0.938rem",
        },
        '& .MuiCardContent-root:last-child':{
            paddingBottom: '2.476%'
        }
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
    },
    titles: {
        fontSize: "0.875rem",
        fontWeight: "500",
    },
    desksNumbers:{
        textAlign: "right",
        display: "inline",
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
        paddingBottom: "2.476%",
    },
    bar: {
        width: "100%",
        position: "relative",
        marginTop: "4.085%",
        '& .MuiLinearProgress-root': {
            borderRadius: "0.938rem",
            height: "3.188rem",
            background: "#263238",
        }
    },
    textBar: {
        color: "white",
        textAlign: "center",
        position: "absolute",
        top: "33.34%",
        bottom: "33.34%",
        left: "34.93%",
        right: "34.93%",
        fontSize: "1rem",
        fontWeight: "700",
    }
}));

export default function SiteCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.root}>
        <img
              className={classes.iconSite}
              src={toAbsoluteUrl(props.siteInformation ? props.siteInformation.img : "")}
        />
        <CardHeader className={classes.total}
        title= {  props.siteInformation ? "Total Opendesks: "  + props.siteInformation.desks : ""}
        />
        
        <CardContent className={classes.content}>
            <div className={classes.numbers} >
                <div className={classes.details}>
                    <div className={classes.numberNumbers}>
                    { props.siteInformation ? props.siteInformation.booked : ""} <br/> 
                    <div className={classes.titles}>
                        Booked Desks
                    </div>
                    </div>
                    <div className={classes.numberNumbers} style={{marginLeft: "14.33%"}}>
                        { props.siteInformation ? props.siteInformation.available : ""} <br/>
                        <div className={classes.titles}> 
                            Available Desks 
                        </div> 
                    </div>
                </div>
            </div>
            <div className={classes.bar}>
                <BorderLinearProgress 
                variant="determinate" 
                value={ props.siteInformation.booked * 100 / props.siteInformation.desks } 
                />
                <div className={classes.textBar}>
                { Math.floor(props.siteInformation.booked * 100 / props.siteInformation.desks) + "% Booked"} 
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
