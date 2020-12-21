import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
    },
    textArea: {
        width: "23.813rem",
        height: "30.688rem !important",
        borderRadius: "1.25rem",
        '&::placeholder': {
            color: "gray",
            textAlign: "center",
            position: "absolute !important",
            bottom: "0 !important",
            left: "0 !important"
        }
    }
}));

export default function TextArea() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <TextareaAutosize id="text" className={classes.textArea}
            placeholder="Type Employee Email addresses seperated by commas to Invite them"
        />
        </div>
    );
}

/* textarea::placeholder {
    align-self: unset;
    color: red;
    position: absolute;
    bottom: 0;
    left: 0;
}*/

