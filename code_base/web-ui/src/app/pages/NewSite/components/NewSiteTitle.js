import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    title: {
        display: "flex",
        justifyContent: "center",
        marginTop: 33,
    }
}));

export const NewSiteTitle = () => {
    const classes = useStyles();

    return (
        <div className={classes.title}>
            <Typography variant="h3" style={{fontWeight: 600, color: "white"}}>
                New Site
            </Typography>
        </div>
    )
}