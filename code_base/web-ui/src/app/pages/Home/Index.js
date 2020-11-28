import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import SideNav from "./components/SideNav";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ContactUs from "./components/ContactUs/ContactUs";
import { makeStyles } from "@material-ui/core/styles";
import { StepProvider } from "./components/HowItWorks/contexts/stepContext";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  background: {
    pink: "#FF575F",
    black: "#1F2E35",
    blue: "#407BFF",
    yellow: "#FF8A34",
    green: "#25C685",
    purple: "#BA68C8",
  },
});

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
  },
}));

export const HomeMain = (props) => {
  // const [page, setPage] = useState()
  const classes = useStyle();
  const curPage = props.location.pathname;
  return (
    <>
      <ThemeProvider theme={theme}>
        <StepProvider>
          <div className={classes.root}>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/home/about" component={AboutUs} />
              <Route exact path="/home/howitworks" component={HowItWorks} />
              <Route exact path="/home/contactus" component={ContactUs} />
            </Switch>
            <SideNav curPage={curPage} />
          </div>
        </StepProvider>
      </ThemeProvider>
    </>
  );
};
