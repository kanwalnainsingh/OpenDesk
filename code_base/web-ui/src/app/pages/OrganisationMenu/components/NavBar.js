import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { toAbsoluteUrl } from "../../../utils/utils";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
    },
    bar: {
        backgroundColor: "#407BFF",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "25px",
        textTransform: "none",
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Button color="inherit" className={classes.title}>
                        Sites
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Employees
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Account
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Search
                    </Button>
                    <img
                        style={{ width: "3.5rem" }}
                        alt="Logo"
                        src={toAbsoluteUrl("/media/logos/blue-logo.svg")}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}
