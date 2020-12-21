import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import LinkButton from "./components/Button";
import Labels from "./components/Labels";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    background: {
        default: "#263238"
    }
  },
});

const useStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
      flexGrow: 1,
      display: "flex",
    },
    employeesArea: {
        paddingLeft: "2.813rem",
        paddingTop: "3rem"
    },
    linkArea: {
        paddingTop: "7.375rem"
    },
    labelsArea: {
      color: "#FFFFFF",
      paddingLeft: "11.375rem",
      paddingTop: "3rem",
      fontSize: "1.5rem",
      letterSpacing: "0.01rem",
      textAlign: "center",
      lineHeight: "2.25rem"
    }
  }));

export default function EmployeesPage() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar/>
            <div className={classes.root}>
              <div className={classes.employeesArea}>
                  <TextArea/>
                  <div className={classes.linkArea}>
                    <LinkButton/>
                  </div>
              </div>
              <div className={classes.labelsArea}>
                    <Labels/>
              </div>

            </div>
            
        </ThemeProvider>
    );
} 
