import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';

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
    },
    searchDrawer: {
        display: "flex",
        width: window.innerWidth,
        height: window.innerHeight,
        alignItems: "flex-start",
        backgroundColor: "#263238",
        ...theme.mixins.toolbar,
    },
    drawerHeader: {
        display: "flex",
        justifyContent: "space-between",
        width: window.innerWidth,
        margin: 20
    }
}));

const SearchDrawer = styled(Drawer)`
    width: 1000px;
`;

export const NavBar = ({ handleDrawerOpen }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleSearchOpen = () => {
        setOpen(true);
    };

    const handleSearchClose = () => {
        setOpen(false);
    };

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
                        color="inherit"
                        aria-label="open search"
                        onClick={() => handleSearchOpen()}>
                        <SearchIcon />
                    </IconButton>
                    <SearchDrawer
                        variant="persistent"
                        anchor="right"
                        open={open}
                        style={{ display: "contents" }}
                    >
                        <div className={classes.searchDrawer}>
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={handleSearchClose}>
                                    <CloseIcon style={{ fill: "white", fontSize: 25 }} />
                                </IconButton>
                                <InputBase
                                    placeholder="Search bookings"
                                    style={{ color: "white", width: "80%", fontSize: 20  }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <IconButton
                                    aria-label="open search">
                                    <SearchIcon  style={{ fill: "white", fontSize: 30 }} />
                                </IconButton>
                            </div>
                        </div>
                    </SearchDrawer>
                </Toolbar>
            </AppBar>
        </div>
    );
}

