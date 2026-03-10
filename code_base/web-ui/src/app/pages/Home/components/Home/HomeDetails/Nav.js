import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  navItem: {
    fontWeight: "bold",
    color: "#000",
    paddingLeft: theme.spacing(2),
    textDecoration: "none",
    cursor: "pointer",
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="transparent"
      style={{ boxShadow: "none", padding: "1rem 0" }}
    >
      <Toolbar style={{display:'flex', justifyContent: "space-between"}}>
        <div className={classes.logo}>
          <img
            style={{ width: "3.5rem" }}
            alt="Logo"
            src={toAbsoluteUrl("/media/logos/red-logo.png")}
          />
        </div>
        <div>
          <Link className={classes.navItem} to="/home/howitworks">
            See How It Works
          </Link>
          <Link className={classes.navItem} to="/home/contactus">
            Contact Us
          </Link>
          <Link className={classes.navItem} to="/home/about">
            About Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
