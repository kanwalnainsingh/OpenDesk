import React, { Component } from "react";
import SiteDetails from "../../components/SiteDetails/SiteDetails";
import SiteService from "../../service/Site/SiteService";
import { createMuiTheme, useMediaQuery } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import NavBar from "../../components/SiteDetails/NavBar";
import { BottomMenu } from "../../components/SiteDetails/BottomMenu";
import AddSite from "../../components/SiteDetails/AddSite";

//uncomment below line to run from mockdata
//const data = require("../../../Asset/mockData/onboardmock.json");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#407BFF",
    },
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
  },
});

const Sites = ({ siteDetails }) => {
  console.log({ siteDetails }["siteDetails"]);
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  const state = { siteDetails };
  return (
    <>
      {mobileBreakPoint ? (
        <div>
          <NavBar />
          {Object.keys(state.siteDetails).length !== 0 ? (
            <div>
              {state.siteDetails.sites.map((site, index) => (
                <SiteDetails
                  key={index}
                  name={site.name}
                  location={site.location}
                  floors={site.floors.length}
                  openDesk={site.openDesk}
                />
              ))}
              <AddSite />
              <BottomMenu />
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      ) : (
        <div>
          <NavBar />
          {Object.keys(state.siteDetails).length !== 0 ? (
            <div>
              {state.siteDetails.sites.map((site, index) => (
                <SiteDetails
                  key={index}
                  name={site.name}
                  location={site.location}
                  floors={site.floors.length}
                  openDesk={site.openDesk}
                />
              ))}
              <AddSite />
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      )}
    </>
  );
};

class sites extends Component {
  state = {
    id: "",
    siteDetails: {},
  };

  componentDidMount() {
    this.state.id = this.props.match.params.id;
    SiteService.getSite(this.state.id).then((response) => {
      console.log(response.data);
      this.setState({
        siteDetails: response.data,
      });
      this.countOpenDesk(response.data);
    });
    //uncomment below line to run from mock data
    //this.state.siteDetails = data;
  }

  countOpenDesk = (response) => {
    let siteDetailsObj = response;
    if (Object.keys(siteDetailsObj).length !== 0) {
      siteDetailsObj.sites.forEach((i) => {
        let count = 0;
        i.floors.forEach((j) => {
          count = count + parseInt(j.openDesk);
        });
        let obj = i;
        obj["openDesk"] = count;
      });
      this.setState({
        siteDetails: siteDetailsObj,
      });
    }
  };
  render() {
    //this.state.siteDetails = data;
    console.log(this.state.siteDetails);
    return (
      <ThemeProvider theme={theme}>
        <Sites siteDetails={this.state.siteDetails} />
      </ThemeProvider>
    );
  }
}

export default sites;
