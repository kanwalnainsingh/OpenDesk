import React from "react";
import { Container, Typography, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toAbsoluteUrl } from "../../../utils/utils";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FF575F",
    height: "50vh",
    color: "white",
    textAlign: "center",
    // padding: "3rem 3rem",
  },
  title: {
    fontWeight: "bold",
    textShadow: "0 2px 4px #00000057",
  },
  description: {
    textShadow: "0 2px 4px #00000057",
  },
  links: {
    marginTop: "3rem",
    "& a": {
      color: "#1F2E35",
      margin: "0 1rem",
      "& p": {
        fontWeight: "bold",
      },
    },
    "& img": {
      width: "3rem",
    },
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Container>
        <Typography variant="h5" component="h5" className={classes.title}>
          Join us
        </Typography>
        <Typography className={classes.description}>
          behind the scenes
        </Typography>
        <Grid
          className={classes.links}
          container
          justify="center"
          alignItems="center"
        >
          <Link
            href="https://join.slack.com/t/opendeskworkspace/shared_invite/zt-igi3hzmb-gIHpAlM0JgbGXbydMwUfoA"
            target="_blank"
          >
            <img src={toAbsoluteUrl("/media/icons/slack.png")} alt="" />
            <Typography>SLACK</Typography>
          </Link>
          <Link
            href="https://github.com/kanwalnainsingh/OpenDesk"
            target="_blank"
          >
            <img src={toAbsoluteUrl("/media/icons/github.png")} alt="" />
            <Typography>GITHUB</Typography>
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
}
