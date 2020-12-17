import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { toAbsoluteUrl } from "../../utils/utils";

const useStyles = makeStyles((theme) => ({
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

//NavBar component
export default function NavBar() {
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
}
