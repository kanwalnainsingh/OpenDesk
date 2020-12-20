import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { IconButton, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    finishLater: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
    }
}));

export const FinishLaterMobile = () => {
    const classes = useStyles();

    return (
        <div className={classes.finishLater}>
            <IconButton aria-label="delete">
                <DeleteIcon style={{ fill: "white" }} />
            </IconButton>
            <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                Finish Later?
            </Typography>
            <IconButton aria-label="done">
                <CheckIcon style={{ fill: "white" }} />
            </IconButton>
        </div>
    )
};