import {
  CardContent,
  Card,
  Typography,
  makeStyles,
  Grid,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "381px",
    height: "139.05px",
    margin: "21px 36px 21px 36px",
    background: "#FFFFFF",
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  content: {
    margin: "auto 8px auto 18px",
  },
}));

export default function SiteCard({ site }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            {site.title}
          </Typography>
          <IconButton edge="end" size="small" style={{ marginRight: "-10px" }}>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div style={{ opacity: "0.5", marginTop:"15px" }}>
          <Typography variant="body1" component="span">
            <Grid container>
              <Grid item xs={4}>
                <div>{site.floors} Floors</div>
              </Grid>
              <Grid item xs="auto">
                <div>{site.desks} Desks</div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <LocationOnIcon fontSize="inherit" /> {site.location}
                </div>
              </Grid>
            </Grid>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
