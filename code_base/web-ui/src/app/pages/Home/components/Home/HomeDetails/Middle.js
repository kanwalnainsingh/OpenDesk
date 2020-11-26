import React from "react";
import history from '../../../../../../history';

import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../utils/utils";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "65vh",
  },
  media: {
    width: "40rem",
  },
  footerButton: {
    flex: "1",
  },
  leftButton: {
    backgroundColor: theme.background.pink,
    "& button": {
      width: "100%",
      height: "100%",
      color: "white",
      "& img": {
        width: "3rem",
        marginRight: theme.spacing(8),
      },
    },
  },
  rightButton: {
    backgroundColor: theme.background.black,
    "& button": {
      width: "100%",
      height: "100%",
      color: "white",
      "& img": {
        width: "3rem",
        marginLeft: theme.spacing(8),
      },
    },
  },
}));

export default function Middle() {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.hero}
        container
        display="flex"
        direction="column"
        justify="center"
      >
        <Box textAlign="center">
          <img
            className={classes.media}
            alt="Opendesk"
            src={toAbsoluteUrl("/media/home/branding-red.png")}
          />
        </Box>
        <Box textAlign="center">
          <Typography gutterBottom variant="h5" component="h2">
            Office desk booking for work-from-home Employees
          </Typography>
          <Typography>
            <Button
              size="medium"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              <NavLink to="/home/about" style={{color: 'inherit', textDecoration:'none'}}>More</NavLink>
            </Button>
          </Typography>
          <Typography style={{ color: "#f66c74" }}>
            <ExpandMoreIcon />
          </Typography>
        </Box>
      </Grid>
      <Grid container className={classes.footerButton}>
        <Grid item xs={6} className={classes.leftButton}>
          <Button onClick={() => history.push('/organisation')}>
            <img src={toAbsoluteUrl("/media/home/icons/building.png")} alt="" />
            <Box>
              <Typography gutterBottom>Continue as an</Typography>
              <Typography
                variant="h4"
                component="h4"
                style={{ fontWeight: "bold" }}
              >
                ORGANIZATION
              </Typography>
            </Box>
          </Button>
        </Grid>
        <Grid item xs={6} className={classes.rightButton}>
          <Button>
            <Box>
              <Typography gutterBottom>Employee ?</Typography>
              <Typography
                variant="h4"
                component="h4"
                style={{ fontWeight: "bold" }}
              >
                BOOK A DESK
              </Typography>
            </Box>
            <img src={toAbsoluteUrl("/media/home/icons/desk.png")} alt="" />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
