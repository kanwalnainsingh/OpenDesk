import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { toAbsoluteUrl } from "../../../utils/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    boxShadow: "none",
    marginTop: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      height: "73vh",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(8),
  },
  description: {
    fontWeight: "bold",
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      width: "60%",
      fontSize: "2rem",
    },
    fontSize: "1.5rem",
  },
  mediaContainter: {
    maxWidth: "100%",
  },
  media: {
    margin: "auto",
    width: "50%",
    alignContent: "center",
  },
  ctaButton: {
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem",
      marginTop: theme.spacing(5),
    },
    lineHeight: 0,
    fontSize: "0.9rem",
    "& svg": {
      color: "#f66c74",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
      fontSize: "0.9rem",
    },
  },
}));

export default function Middle(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container>
        {props.mobileBreakPoint ? (
          <Typography className={classes.title} gutterBottom variant="h4">
            Opendesk
          </Typography>
        ) : (
          ""
        )}
        <div className={classes.mediaContainter}>
          <img
            className={classes.media}
            component="img"
            alt="Opendesk"
            src={toAbsoluteUrl("/media/wip/wip-home.svg")}
          />
        </div>

        <Grid container direction="column" alignItems="center">
          <Typography
            className={classes.description}
            gutterBottom
            component="h5"
          >
            Hi, We are under progress right now
          </Typography>

          <Button
            size="large"
            color="inherit"
            className={classes.ctaButton}
            component={Link}
            to="/home"
          >
            CHECK PROGRESS
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
      </Container>
    </Grid>
  );
}
