import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { toAbsoluteUrl } from "../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "#000",
    width: "100%",
    boxShadow: "none",
    paddingTop: "1rem",
  },
  logo: {
    width: "50%",
    display: "flex",
    alignContent: "flex-start",
  },
}));

export default function Nav() {
  const theme = useTheme();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Container>
          <Toolbar>
            <div className={classes.logo}>
              <img
                style={mobileBreakPoint ? { width: "4rem" } : { width: "10%" }}
                alt="Logo"
                src={toAbsoluteUrl("/media/logos/red-logo.png")}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
