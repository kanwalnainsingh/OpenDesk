import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    finishLater: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
    button: {
        color: "white",
        fontWeight: 600,
        fontSize: 14
    }
}));

export const FinishLaterDesktop = () => {
    const classes = useStyles();
    return (
        <div className={classes.finishLater}>
            <Button className={classes.button} style={{ marginRight: 32 }}>Delete</Button>
            <Button className={classes.button} >Finish Later?</Button>
            <Button className={classes.button} style={{ marginLeft: 32 }}>Save</Button>
        </div>
    )
};