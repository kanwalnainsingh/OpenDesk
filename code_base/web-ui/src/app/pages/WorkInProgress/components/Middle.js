import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Container,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from "../../../utils/utils";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    boxShadow: "none",
    marginTop: "3rem",
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
    marginBottom: "5rem",
  },
  description: {
    fontWeight: "bold",
    marginTop: "2rem",
  },
  mediaContainter: {
    verticalAlign: "top",
    textAlign: "center",
    maxWidth: "100%",
  },
  media: {
    margin: "auto",
    width: "50%",
    alignContent: "center",
  },
  ctaButton: {
    fontWeight: "bold",
    lineHeight: 0,
    "& svg": {
      color: "#f66c74",
    },
  },
}));

export default function Middle() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Container>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h4"
          component="h4"
        >
          Opendesk
        </Typography>
        <div className={classes.mediaContainter}>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Opendesk"
            src={toAbsoluteUrl("/media/wip/WIP-home.png")}
          />
        </div>

        <CardContent>
          <Typography
            className={classes.description}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Hi, We are under progress right now
          </Typography>

          <Button size="medium" color="inherit" className={classes.ctaButton} component={Link} to="/home">
            CHECK PROGRESS
            <ArrowForwardIosIcon />
          </Button>
        </CardContent>
      </Container>
    </Card>
  );
}
