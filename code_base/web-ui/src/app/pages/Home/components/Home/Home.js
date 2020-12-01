import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./HomeDetails/Nav";
import Middle from "./HomeDetails/Middle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100vh',
    display: 'flex',
    flexDirection: 'column' 
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <Middle />
    </div>
  );
}
