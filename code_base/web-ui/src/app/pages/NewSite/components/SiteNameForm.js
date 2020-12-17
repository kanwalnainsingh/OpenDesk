import React from 'react';
import { FormControl, Input, InputAdornment, InputLabel, makeStyles } from '@material-ui/core';
import building from '../images/Building.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: 41
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        border: "solid 1px",
        width: 381,
        height: 55,
        borderRadius: 15,
        backgroundColor: "white",
        fontWeight: 600,
        fontSize: 20
    }
}))

export const SiteNameForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <FormControl className={classes.margin}>
                <Input
                    className={classes.input}
                    id="input-with-icon-adornment"
                    placeholder="Site Name"
                    disableUnderline={true}
                    startAdornment={
                        <InputAdornment position="start">
                            <img src={building}></img>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
}