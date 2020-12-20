import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    background: {
        default: "#263238"
    }
  }
});

const useStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
      display: "flex",
    },
    employeesArea: {
        backgroundColor: '#263238',
    }
  }));

export default function EmployeesPage() {
    const classes = useStyle();
    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <div className={classes.employeesArea}>
                <TextArea/>
            </div>
        </ThemeProvider>
    );
} 
