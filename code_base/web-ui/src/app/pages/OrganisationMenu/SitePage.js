import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { toAbsoluteUrl } from "../../utils/utils";
// general components
import NavBar from "./components/NavBar";
import BackArrow from "./components/BackArrow";
// specific components
import SubMenu from "./components/Sites/SubMenu";
import SiteCard from "./components/Sites/SiteCard";
import SiteCardOverview from "./components/Sites/SiteCardOverview";
import AddSiteCard from "./components/Sites/AddSiteCard";
// import {
//   DatePicker,
//   TimePicker,
//   DateTimePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import CalendarSite from "./components/Sites/CalendarSite";



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
    informationDesktop: {
      display: "inline-block",
      verticalAlign: "top",
      width: "25.4%",
      marginLeft: "6.067%",
      marginTop: "2.734%",
      marginBottom: "2.4%",
      marginRight:"2.4% "
    },
    sitesZone:{
      margin: "3.65%",
      marginTop: "10.22%"
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
      marginTop: "5.355%",

    },
    details: {
      fontSize: "1rem",
      fontWeight: "600",
      marginTop: "1.706%",
    },
    floors: {
      display: "inline-block",
      marginRight: "7.34%",
    },
    overview:{
      display: "inline-block",
      width: "25.4%",
      margin: "2.734% 2.4% 2.734% 2.4%"
    },
    cardsDetails: {
      display: "inline-block",
      verticalAlign: "top",
      width: "25.4%",
      marginLeft: "6%",
      marginTop: "2.734%",
      marginBottom: "2.4%",
      marginRight:"2.4% "
    },
    mobileCalendar: {
      position: "absolute",
      margin: "auto",
      bottom: "-40%",
      width: "100%",
    }
  }));

const clickHandler = (e) => { 
    const calendarSite =document.getElementById('calendarSite');
    const header = document.getElementById('headerToolbarCalendar');
    if (e.target === header && calendarSite.contains(e.target)) {
      console.log(calendarSite.style.height);
      if(calendarSite.style.bottom === "0.1%") {
        calendarSite.style.bottom = "-40%";
        calendarSite.style.height = "350px";
      }
      else {
        // clicked in the header
        calendarSite.style.bottom = "0.1%";
        calendarSite.style.height = "510px";
      }
    }
  }

export default function SitePage() {
    const classes = useStyle();
    const desktop = useMediaQuery('(min-width:992px)');

    if (desktop) {
      return (
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <NavBar/>
              <SubMenu />
              <div>
                { /* Zone of overview cards */}
                <div className={classes.overview}>
                  <SiteCardOverview siteInformation={siteInformation}/>
                  <SiteCardOverview siteInformation={siteInformation1}/>
                  <SiteCardOverview siteInformation={siteInformation2}/>
                  <AddSiteCard />
                </div>
                { /* Zone of cards */}
                <div className={classes.cardsDetails}>
                  <SiteCard siteInformation={siteInformation}/>
                  <SiteCard siteInformation={siteInformation1}/>
                  <SiteCard siteInformation={siteInformation2}/>
                </div>
                { /* Title and datepicker zone */}
                <div className={classes.informationDesktop}>
                    <div className={classes.title} style={{paddingTop: "0"}}>
                      {siteInformation.location}
                      <div className={classes.address} style={{marginTop: "5.775%"}}>
                          <LocationOnIcon fontSize="inherit"  />
                          { siteInformation ? siteInformation.address : ""} 
                      </div>
                      <div className={classes.details} style={{marginTop: "2.365%", marginBottom: "16.8%"}}>
                        <div className={classes.floors}>
                          { siteInformation ? siteInformation.floors : ""} Floors
                        </div>
                        { siteInformation ? siteInformation.desks : ""} Desks
                      </div>
                    </div>
                    <div style={{height: "510px"}}>
                      <CalendarSite />
                    </div>
                </div>
                    
              </div>
                
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
            <div className={classes.title} style={{marginTop: "10.95%", paddingTop: "0"}}>
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
              <SiteCard siteInformation={siteInformation2}/>
            </div>
            <div id="calendarSite" className={classes.mobileCalendar} style={{height: "350px"}}  onClick={clickHandler}>
              <CalendarSite/>
            </div>
        </ThemeProvider>
    );
    }
} 
