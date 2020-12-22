import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {},
}));

export default function SectionControls({ children }) {
    const classes = useStyles();

    return <div>{children}</div>;
}
