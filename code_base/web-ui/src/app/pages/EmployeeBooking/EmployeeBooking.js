import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BookingStepper } from './components/BookingStepper'
import { StepProvider } from "./state/StepContext";
import { FormProvider } from "./state/FormContext";

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
                <FormProvider >
                    <StepProvider>
                        <BookingStepper />
                    </StepProvider>
                </FormProvider>
            </div>
        </ThemeProvider>

    );
}
