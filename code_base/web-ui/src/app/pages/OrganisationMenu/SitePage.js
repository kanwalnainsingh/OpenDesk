import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavBar from "./components/NavBar";
import SubMenu from "./components/SubMenu";
import { toAbsoluteUrl } from "../../utils/utils";
import SiteCard from "./components/SiteCard";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import BackArrow from "./components/BackArrow";

const siteInformation = {
  location: "Nefkzi, Manhattan",
  floors: "6",
  desks: "841",
  booked: "275",
  available: "592",
  address: "3517 W. Gray St. Utica, Manhattan 57867",
  img: "/media/organization/site/icons/building.svg",
};

const siteInformation1 = {
  location: "Nefkzi, Manhattan",
  floors: "6",
  desks: "122",
  booked: "89",
  available: "23",
  address: "3517 W. Gray St. Utica, Manhattan 57867",
  img: "/media/organization/site/icons/0.svg",
};


const siteInformation2 = {
  location: "Nefkzi, Manhattan",
  floors: "6",
  desks: "841",
  booked: "275",
  available: "592",
  address: "3517 W. Gray St. Utica, Manhattan 57867",
  img: "/media/organization/site/icons/1.svg",
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    background: {
        default: "#263238"
    }
  },
});

const useStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
      flexGrow: 1,
      display: "flex",
    },
    search: {
      paddingLeft: "4.38%",
      paddingTop: "4.38%"
    },
    points: {
      paddingTop: "4.198%",
      float: "right",
      paddingRight: "6.02%",
    },
    title: {
      paddingTop: "10.87104623%",
      width: "100%",
      height: "8.759124088%",
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "700",
      fontSize: "1.5rem"
    },
    sitesZone:{
      margin: "3.65%",
    },
    back: {
      paddingTop: "3%",
      paddingLeft: "5.2%",
      display: "inline-block"
    },
    icon:{
      paddingTop: "1.57%",
      paddingRight: "1.57%",
      paddingBottom: "2.62%",
      verticalAlign: "middle",
    },
    address:{
      fontSize: "0.813rem",
      fontWeight: "500",

    },
    details: {
      fontSize: "1rem",
      fontWeight: "600",
    },
    floors: {
      display: "inline-block",
      marginRight: "7.34%",
  },
  }));

export default function SitePage() {
    const classes = useStyle();
    const desktop = useMediaQuery('(min-width:992px)');
    if (desktop) {
      return (
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <NavBar/>
              <SubMenu />
          </ThemeProvider>
      );
    }
    else{
      // mobile
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <div className={classes.back}>
                <BackArrow/>
            </div>
            <img
              className={classes.points}
              src={toAbsoluteUrl("/media/organization/site/icons/points.svg")}
            />
            <div className={classes.title}>
              {siteInformation.location}
              <div className={classes.address}>
                  <LocationOnIcon fontSize="inherit" />
                  { siteInformation ? siteInformation.address : ""} 
              </div>
              <div className={classes.details}>
                <div className={classes.floors}>
                  { siteInformation ? siteInformation.floors : ""} Floors
                </div>
                { siteInformation ? siteInformation.desks : ""} Desks
              </div>
            </div>
          
            <div className={classes.sitesZone}>
              <SiteCard siteInformation={siteInformation}/>
              <SiteCard siteInformation={siteInformation1}/>
            </div>
        </ThemeProvider>
    );
    }
} 
