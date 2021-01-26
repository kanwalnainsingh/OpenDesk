import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Account from "../../container/Account/Account";
import NavBar from "./components/NavBar";
import Search from "../../components/Search/Search";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#263238",
        width: "auto",
        height: "2000px",
    },
}));

export default function OrganisationMain() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavBar />
            <Account />
        </div>
    );
}
