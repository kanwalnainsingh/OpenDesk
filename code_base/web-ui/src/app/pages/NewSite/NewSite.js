import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { FinishLaterMobile } from './components/FinishLaterMobile';
import { FinishLaterDesktop } from './components/FinishLaterDesktop';
import { NewSiteTitle } from './components/NewSiteTitle';
import { SiteNameForm } from './components/SiteNameForm';
import { LocationForm } from './components/LocationForm';
import { AddFloorForm } from './components/AddFloorForm';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from './images/Logo.png'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#407BFF'
        },
        secondary: {
            main: '#263238'
        }
    },
    typography: {
        fontFamily: "Poppins, sans-serif"
    }
});

const useStyles = makeStyles((theme) => ({
    mobileRoot: {
        padding: theme.spacing(1),
        backgroundColor: "#263238",
    },
    mobileSecondary: {
        padding: theme.spacing(1),
        backgroundColor: "#407BFF",
        paddingTop: 40,
    },
    desktopBackground: {
        backgroundColor: "#263238",
        height: window.innerHeight
    },
    desktopRoot: {
        padding: theme.spacing(1),
        backgroundColor: "#407BFF",
        position: "relative"
    },
    desktopSecondary: {
        display: "flex",
        justifyContent: "flex-start",
        padding: theme.spacing(1),
        backgroundColor: "#263238",
        paddingLeft: 54,
    },
    desktopDivider: {
        marginRight: 70
    },
    mobileBackground: {
        backgroundColor: "#407BFF",
        height: window.innerHeight
    }
}))

export default function NewSite() {
    const classes = useStyles();
    const desktop = useMediaQuery('(min-width:600px)');

    if (desktop) {
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.desktopBackground}>
                    <div className={classes.desktopRoot}>
                        <img src={logo} style={{ position: "absolute", top: 30, right: 50 }}></img>
                        <NewSiteTitle />
                        <FinishLaterDesktop />
                    </div>
                    <div className={classes.desktopSecondary}>
                        <div className={classes.desktopDivider}>
                            <SiteNameForm />
                            <LocationForm />
                        </div>
                        <div style={{ marginTop: 15 }}>
                            <AddFloorForm />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <div className={classes.mobileBackground}>
                    <div className={classes.mobileRoot}>
                        <FinishLaterMobile />
                        <NewSiteTitle />
                        <SiteNameForm />
                        <LocationForm />
                    </div>
                    <div className={classes.mobileSecondary}>
                        <AddFloorForm />
                    </div>
                </div>
            </ThemeProvider>

        );
    }


};