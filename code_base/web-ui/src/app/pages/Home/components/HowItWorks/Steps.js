import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { toAbsoluteUrl } from "../../../../utils/utils";

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
  illustrationContainer:{
    textAlign: 'center'
  },
  illustration: {
    width: "80%",
    height: "auto",
  },
  stepTitle: {
    width: "50%",
    height: "auto",
    textAlign: "center",
    "& h2": {
      fontWeight: "bold",
    },
  },
}));

export default function Steps(props) {
  const classes = useStyle();
  return (
    <Grid container>
      <Grid item xs={6} alignItems="flex-end" className={classes.illustrationContainer}>
        <img
          className={classes.illustration}
          src={toAbsoluteUrl(props.image)}
        />
      </Grid>

      <Grid
        container
        item
        xs={6}
        direction="column"
        justify="space-around"
        className={classes.stepTitle}
      >
        <Typography variant="h2">{props.title}</Typography>
        <Typography>
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
