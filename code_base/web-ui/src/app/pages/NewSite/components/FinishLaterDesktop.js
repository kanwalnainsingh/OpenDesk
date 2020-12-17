import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    finishLater: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    }
}));

export const FinishLaterDesktop = () => {
    const classes = useStyles();
    return (
        <div className={classes.finishLater}>
            <Button style={{ color: "white", marginRight: 32 }}>Delete</Button>
            <Button style={{ color: "white"}}>Finish Later?</Button>
            <Button style={{ color: "white", marginLeft: 32 }}>Save</Button>
        </div>
    )
};