/**
 * Build originally by Johan del Valle 
 * Modified by Lucero Garcia
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
    Card,
    Typography,
    Grid,
    IconButton,
    useMediaQuery,
    createMuiTheme,
  } from "@material-ui/core";


  const theme = createMuiTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 100,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

const useStyles = makeStyles((site) => ({
    card: {
        marginBottom: "5.515%",
        background: "#FFFFFF",
        boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "1.25rem",
    },
    cardMobile: {
        width: "381px",
        height: "139.05px",
        margin: "21px auto 21px auto",
        background: "#FFFFFF",
        boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "1.25rem",
    },
    content: {
        margin: "auto 8px auto 18px",
    },
  }));
  

export default function SiteCardOverview({siteInformation}) {
  const classes = useStyles();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={
        mobileBreakPoint ? { display: "flex", justifyContent: "center" } : {}
      }
    >
      <Card className={mobileBreakPoint ? classes.cardMobile : classes.card}>
        <CardContent className={classes.content}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              {siteInformation.location}
            </Typography>
            <IconButton
              edge="end"
              size="small"
              style={{ marginRight: "-3.1%", color:"black" }}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
          <div style={{ opacity: "0.5", marginTop: "4.646%", fontSize: "0.875rem" }}>
            <Typography variant="body1" component="span">
              <Grid container>
                <Grid item xs={4}>
                  <div>{siteInformation.floors} Floors</div>
                </Grid>
                <Grid item xs="auto">
                  <div>{siteInformation.desks} Desks</div>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <LocationOnIcon fontSize="inherit" /> 
                    <div style={{ fontSize: "0.813rem", display: "inline" }}>
                        {siteInformation.address}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
