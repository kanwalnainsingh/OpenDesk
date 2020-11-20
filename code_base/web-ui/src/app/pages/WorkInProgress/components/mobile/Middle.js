import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  Container,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { toAbsoluteUrl } from "../../../../utils/utils";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid, GridItem } from "@bigcommerce/big-design";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    textAlign: "center",
    boxShadow: "none",
    marginTop: "3rem",
    height: "75vh"
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
});

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
          <Typography gutterBottom >
            <Button
              size="medium"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              CHECK PROGRESS
              <ArrowForwardIosIcon style={{color: "#f66c74"}}/>
            </Button>
          </Typography>

          <Grid gridColumns="repeat(2, 1fr)">
            <GridItem></GridItem>
            <GridItem></GridItem>
          </Grid>
        </CardContent>
        <CardActions></CardActions>
      </Container>
    </Card>
  );
}
