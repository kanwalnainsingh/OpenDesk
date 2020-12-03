import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Link } from "@material-ui/core";
import { toAbsoluteUrl } from "../../../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  navItem: {
    fontWeight: "bold",
    color: "#000",
    paddingLeft: theme.spacing(2),
  },
}));

export default function Nav() {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

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
          <Link className={classes.navItem} href="#" onClick={preventDefault}>
            See How It Works
          </Link>
          <Link className={classes.navItem} href="#" onClick={preventDefault}>
            Contact Us
          </Link>
          <Link className={classes.navItem} href="#" onClick={preventDefault}>
            About Us
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
