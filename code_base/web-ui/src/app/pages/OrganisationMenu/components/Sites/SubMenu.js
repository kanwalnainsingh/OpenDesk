import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";
import { toAbsoluteUrl } from "../../../../utils/utils";
import { NavLink, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "-2%",
        flexGrow: 2,
        display: "flex",
        '& .MuiAppBar-colorPrimary': {
            backgroundColor: "#407BFF",
        },
        '& .MuiPaper-elevation4': {
            boxShadow: "none",
        }
    },
    bar: {
        backgroundColor: "#407BFF",
        padding: "0",
        marginLeft: "2.4%",
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "1.125rem",
        fontWeight: "bold",
        letterSpacing: "0.01rem",
        textTransform: "none",
        marginRight: "3%"
    },
    left:{
        // display: "flex",
        float: "left",
        width: "49%",
    },
    right: {
        // display: "flex",
        textAlign: "right",
        float: "right",
        width: "49%",
    },
    link: {
        textDecoration: "none",
        color: 'inherit'
      }
}));

export default function SubMenu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <div className={classes.left}>
                    <Button color="inherit" className={classes.title}>
                        <NavLink to={`/newsite`} className={classes.link}>
                            Add Site
                        </NavLink>
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Inactive Sites
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Drafts
                    </Button>
                    </div>
                    <div className={classes.right}>
                    <Button color="inherit" className={classes.title}>
                        Edit Site
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Deactivate Site
                    </Button>
                    <Button color="inherit" className={classes.title}>
                        Delete Site
                    </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
