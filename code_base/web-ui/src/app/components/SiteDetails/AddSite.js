import {
  CardContent,
  Card,
  Typography,
  makeStyles,
  useMediaQuery,
  createMuiTheme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    width: "381px",
    height: "60px",
    margin: "21px 36px 21px 36px",
    background: "#FFFFFF",
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  cardMobile: {
    width: "381px",
    height: "60px",
    margin: "21px auto 21px auto",
    background: "#FFFFFF",
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  content: {
    margin: "auto 8px auto 18px",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 100,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function AddSite() {
  const classes = useStyles();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={
        mobileBreakPoint ? { display: "flex", justifyContent: "center" } : {}
      }
    >
      <Card className={mobileBreakPoint ? classes.cardMobile : classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h6" component="div">
            Add site
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
