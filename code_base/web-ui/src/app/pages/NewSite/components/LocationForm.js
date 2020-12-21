import React from 'react';
import { FormControl, Input, makeStyles, Typography } from '@material-ui/core';
import locationPin from '../images/Pin.png'

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
        width: 361,
        height: 60,
        borderRadius: 15,
        backgroundColor: "#263238",
        color: "white",
        paddingLeft: 32,
    },
    outerSpace: {
        backgroundColor: "white",
        height: 129,
        width: 381,
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 4,
        flexDirection: "column",
        position: "relative",
        marginBottom: 59
    },
    locationPin: {
        position: "absolute",
        top: -20,
        right: 25,
        WebkitFilter: "drop-shadow(10px 10px 35px rgba(0,0,0,0.5))"
    }
}))

export const LocationForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.outerSpace}>
                <Typography style={{ marginTop: 21, fontWeight: 600, fontSize: 16 }}>PICK ON MAP</Typography>
                <FormControl className={classes.margin}>
                    <Input
                        className={classes.input}
                        id="location"
                        placeholder="Location"
                        disableUnderline={true}
                        style={{ fontWeight: 600, fontSize: 20 }}
                    />
                </FormControl>
                <img className={classes.locationPin} src={locationPin}></img>
            </div>
        </div>
    )
}