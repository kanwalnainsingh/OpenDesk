import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BookingStepper } from './components/BookingStepper'
import { StepProvider } from "./state/StepContext";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#407BFF'
        }
    },
    typography: {
        fontFamily: "Poppins, sans-serif"
    },
}
);

export default function Index() {

    return (
        <ThemeProvider theme={theme}>
            <div>
                <StepProvider>
                    <BookingStepper />
                </StepProvider>
            </div>
        </ThemeProvider>

    );
}
