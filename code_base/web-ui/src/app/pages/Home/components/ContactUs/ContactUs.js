import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { toAbsoluteUrl } from "../../../../utils/utils";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
  },
  bgContainer: {
    backgroundImage: `url(${toAbsoluteUrl("/media/home/email/email.png")})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30rem",
  },
  inputBody: {
    "& div": {
      marginBottom: theme.spacing(3),
      backgroundColor: "#EEFAF5",
    },
    "& div textarea": {
      backgroundColor: "#EEFAF5",
      width: "20rem",
    },
    "& div input": {
      backgroundColor: "#EEFAF5",
    },
    "& label": {
      color: "#25C685",
      fontWeight: "bold",
    },
  },
}));

export default function HowItWorks() {
  const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-between"
        className={classes.bgContainer}
      >
        <div>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginBottom: 0 }}
            align="center"
          >
            Leave us a message and
          </Typography>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold" }}
            align="center"
          >
            we'll email you :{")"}
          </Typography>
        </div>

        <div className={classes.inputContainer}>
          <TextField
            label="Your Email Address"
            type="text"
            variant="outlined"
            className={classes.inputBody}
          />
          <TextField
            label="Type a message .."
            multiline
            rows="12"
            fullWidth
            type="text"
            variant="outlined"
            className={classes.inputBody}
          />
        </div>

        <Typography style={{ fontWeight: "bold" }}>
          Or email us directly at business@bookopendesk.com
        </Typography>
      </Grid>
    </Grid>
  );
}
