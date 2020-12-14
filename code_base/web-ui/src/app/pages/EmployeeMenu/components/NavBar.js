import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    bar: {
        backgroundColor: "#263238",
        flexDirection: "column"
    },
    toolbar: {
        justifyContent: "space-between",
        height: 75
    }
}));


export const NavBar = ({ handleDrawerOpen }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} position="fixed" className={classes.bar}>
                <Toolbar elevation={0} className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => handleDrawerOpen()}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5">OPENDESK</Typography>
                    <IconButton
                        color="inherit">
                        <SearchIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

