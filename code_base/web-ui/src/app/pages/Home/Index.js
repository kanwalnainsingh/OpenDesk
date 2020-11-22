import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Home from "./components/Home/Home";

const theme = createMuiTheme({
  background: {
    pink: "#FF575F",
    black: "#1F2E35",
    blue: "#407BFF",
    yellow: "#FF8A34",
    green: "#25C685",
    purple: "#BA68C8",
  },
});

export const HomeMain = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};
