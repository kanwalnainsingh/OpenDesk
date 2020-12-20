import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
    },
    textArea: {
        
    }
}));

export default function TextArea() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <TextareaAutosize className={classes.textArea}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua."
        />
        </div>
    );
}
