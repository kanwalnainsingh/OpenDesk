import {
  AppBar,
  createMuiTheme,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { toAbsoluteUrl } from "../../utils/utils";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: "bold",
    fontSize: "50px",
  },
  nav: {
    background: "#407BFF",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.25)",
    padding: "1rem 0",
    height: "154px",
  },
  nav_menu: {
    display: "flex",
    justifyContent: "space-around",
    width: "400px",
    marginTop: "24px",
    fontSize: "16px",
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#FFFFFF",
    },
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
});

const DesktopNav = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" className={classes.nav}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h3" component="h3" className={classes.title}>
            Sites
          </Typography>
        </div>
        <div>
          <Typography
            variant="h3"
            component="h3"
            className={classes.title}
            style={{ opacity: "30%" }}
          >
            Employees
          </Typography>
        </div>
        <div>
          <Typography
            variant="h3"
            component="h3"
            className={classes.title}
            style={{ opacity: "30%" }}
          >
            Account
          </Typography>
        </div>
        <div>
          <Typography
            variant="h3"
            component="h3"
            className={classes.title}
            style={{ opacity: "30%" }}
          >
            Search
          </Typography>
        </div>
        <div className={classes.logo}>
          <img src={toAbsoluteUrl("/media/logo.svg")} alt="logo" />
        </div>
      </Toolbar>
      <div className={classes.nav_menu}>
        <Typography variant="h6" component="h6">
          Add site
        </Typography>
        <Typography variant="h6" component="h6">
          Inactive Sites
        </Typography>
        <Typography variant="h6" component="h6">
          Drafts
        </Typography>
      </div>
    </AppBar>
  );
};

const MobileNav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px auto 20px",
        }}
      >
        <div>
          <IconButton size="medium" edge="start">
            <SearchIcon color="secondary" />
          </IconButton>
        </div>
        <div>
          <IconButton edge="end" size="medium">
            <MoreVertIcon color="secondary" />
          </IconButton>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          style={{ fontWeight: "bold", color: "#FFFFFF" }}
        >
          Sites
        </Typography>
      </div>
    </>
  );
};

//NavBar component
export default function NavBar() {
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      {mobileBreakPoint ? <MobileNav /> : <DesktopNav />}
    </ThemeProvider>
  );
}
