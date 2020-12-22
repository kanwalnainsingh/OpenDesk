import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        // BACKGROUND OF THE INPUT
        background: "white",
        borderRadius: "1.25rem",
        '& .MuiOutlinedInput-multiline': {
            padding: ".5rem"
        },
        '&:focus': {
            outline: "none",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "0",
            borderRadius: "5px 5px 0 0"
        },
    },
    input: {
        height: "22.375rem !important",
        padding: "0rem",
        '&::placeholder': {
            paddingTop: 22.375*.85+"rem",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "1rem",
            color: "#263238",
            opacity: '0.3',
        },
    }
}));

export default function TextArea() {
    const classes = useStyles();
    return (
            <TextField className={classes.root}
            id="outlined-multiline-static"
            placeholder="Type Employee Email addresses seperated by commas to Invite them"
            multiline
            // rows={20}
            InputProps={{ classes: { input: classes.input } }}
            variant="outlined"
            />
    );
}
