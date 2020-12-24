import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
          label: {
              display: "inline-block"
          }
        },
      },
  });

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
    },
    linkButton: {
        color: "#FFFFFF",
        backgroundColor: "#407BFF",
        width: "inherit",
        height: "4.938rem",
        borderRadius: "1.25rem",
    },
    fontCopy: {
        fontSize: "1.5rem",
        margin: "0",
        padding: "0",
        border: "0",
        fontWeight: "700",
        letterSpacing: "0.01rem"
    }
    
}));

export default function LinkButton() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Button className={classes.linkButton}>
                    <div> Invite via Link? </div>
                    <div className={classes.fontCopy}> COPY LINK </div>
            </Button>
        </ThemeProvider>
    );
}