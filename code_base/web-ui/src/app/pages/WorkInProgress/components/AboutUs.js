import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1F2E35",
    height: "50vh",
    color: "white",
    textAlign: "center",
    padding: "0 3rem",
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    marginTop: "3rem",
  },
});

export default function AboutUs() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container display="flex" justify="center" alignItems="center">
      <Container>
        <Typography variant="h5" component="h5" className={classes.title}>
          About Us
        </Typography>
        <Typography className={classes.description}>
          OpenDesk is an open source project for helping organisations optimize
          office desk utilization. System will enable employees to reserve their
          desk when they want to work from office.
        </Typography>
      </Container>
    </Grid>
  );
}
