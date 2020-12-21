import React from "react";
import { makeStyles} from "@material-ui/core/styles";
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
            /*position: "absolute !important",
            bottom: "0 !important",
            left: "0 !important",*/
            fontSize: "1rem",
            width: "20.5rem",
            height: "4rem",
            color: "#263238",
            opacity: '0.3',
            paddingTop: "26rem",
            paddingLeft: "1.688rem",
            fontWeight: "600",
            letterSpacing: "0.01rem",
            fontFamily: "Poppins, sans-serif",
        },
    }
}));

export default function TextArea() {
    const classes = useStyles();

    return (
        <TextareaAutosize id="text" className={classes.textArea}
            placeholder="Type Employee Email addresses seperated by commas to Invite them"
        />
    );
}

