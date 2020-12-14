import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SideDrawer from "./components/SideDrawer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#407BFF'
    }
  },
    typography: {
      fontFamily: "Poppins, sans-serif"
    }
  });

export default function Index() {
    return (
        <ThemeProvider theme={theme}>
        <div>
        <SideDrawer/>
        </div>
        </ThemeProvider>
    );
}
