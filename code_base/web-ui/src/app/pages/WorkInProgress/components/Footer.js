import React from "react";
import { Container, Typography, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toAbsoluteUrl } from "../../../utils/utils";

const useStyles = makeStyles( (theme) => ({
  root: {
    backgroundColor: "#FF575F",
    height: "50vh",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "9rem",
    },
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
      margin: "0 0.75rem",
      "& p": {
        fontWeight: "bold",
        [theme.breakpoints.up("md")]: {
          fontSize: '1rem'
        },
        fontSize: '0.75rem'
      },
    },
    "& img": {
      width: "2.5rem",
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Container fluid>
        <Typography variant="h4" component="h4" className={classes.title}>
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
            href="https://join.slack.com/t/opendeskworkspace/shared_invite/zt-jf6wxjc3-aj5SF9S6t~VSJiRswQwXbw"
            target="_blank"
          >
            <img
              src={toAbsoluteUrl("/media/wip/icons/slack.svg")}
              alt="Slack Invitation"
            />
            <Typography>SLACK</Typography>
          </Link>
          <Link
            href="https://github.com/kanwalnainsingh/OpenDesk"
            target="_blank"
          >
            <img
              src={toAbsoluteUrl("/media/wip/icons/github.svg")}
              alt="Github Source Code"
            />
            <Typography>GITHUB</Typography>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCbjAYM7lRMbJPoYf7HYqQLw/"
            target="_blank"
          >
            <img
              src={toAbsoluteUrl("/media/wip/icons/youtube.svg")}
              alt="Book Open Desk Youtube"
            />
            <Typography>YOUTUBE</Typography>
          </Link>
          <Link
            href="https://t.me/joinchat/MC6oMhvKc7QYogm6lBJgfg"
            target="_blank"
          >
            <img
              src={toAbsoluteUrl("/media/wip/icons/telegram.svg")}
              alt="Telegram Channel"
            />
            <Typography>TELEGRAM</Typography>
          </Link>
        </Grid>
      </Container>
    </Grid>
  );
}
