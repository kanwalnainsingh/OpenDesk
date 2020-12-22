import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import TextArea from "./components/TextArea";
import LinkButton from "./components/Button";
import BackArrow from "./components/BackArrow";
import Labels from "./components/Labels";
import EmployeesLabel from "./components/EmployeesLabel";
import CssBaseline from "@material-ui/core/CssBaseline";
import { toAbsoluteUrl } from "../../utils/utils";
import ButtonsMobile from "./components/ButtonsMobile";
import { Link } from "react-router-dom";

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
        // position: "absolute",
        paddingTop: "3%",
        paddingLeft: "5.2%",
    },
  }));

export default function EmployeesPageMobile() {
    const classes = useStyle();
      // mobile
      return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*<Link to ='/organisation' className={classes.link}>
            <img
              className={classes.back}
              src={toAbsoluteUrl("/media/employees/icons/backArrow.svg")}
            />
            </Link>*/}
            <div className={classes.back}>
                <BackArrow/>
            </div>
            
        </ThemeProvider>
    );
} 
