import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  background: {
    pink: "#FF575F",
    black: "#1F2E35",
    blue: "#407BFF",
    yellow: "#FF8A34",
    green: "#25C685",
    purple: "#BA68C8",
  },
});



export default function EmployeesPage() {
    return <NavBar/>;

} 