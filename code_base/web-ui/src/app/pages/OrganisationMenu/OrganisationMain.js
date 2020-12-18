import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Account from "../../container/Account/Account";
import NavBar from "./components/NavBar";
import Search from "../../components/Search/Search";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#263238",
        backgroundSize: "100% 100%",
    },
}));

export default function OrganisationMain() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <NavBar />

            <div className={classes.root}>
                <Account />
            </div>
        </React.Fragment>
    );
}
