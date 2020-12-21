import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BookingStepper } from './components/BookingStepper'

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
                <BookingStepper />
            </div>
        </ThemeProvider>

    );
}
