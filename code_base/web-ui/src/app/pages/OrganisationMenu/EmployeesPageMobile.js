import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TextArea from "./components/TextArea";
import LinkButton from "./components/Button";
import BackArrow from "./components/BackArrow";


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
    back: {
        paddingTop: "3%",
        paddingLeft: "5.2%",
    },
    textArea: {
      paddingTop: "10.35%",
      paddingLeft: "6.5%",
      paddingRight: "6.5%",
    },
    linkArea: {
      paddingLeft: "6.5%",
      paddingRight: "6.5%",
      paddingTop: "31.87%",
      width: "100%",
    }
  }));

export default function EmployeesPageMobile() {
    const classes = useStyle();
    const desktop = useMediaQuery('(min-width:992px)');
      // mobile
      if(!desktop) {
      return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.back}>
                <BackArrow/>
            </div>
            <div className={classes.textArea}>
              < TextArea />
            </div>
            <div className={classes.linkArea}>
              <LinkButton/>
            </div>
            
        </ThemeProvider>
    );
      }
      else{
        return(<div></div>); 
      }
} 
