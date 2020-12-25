import React, { useState, useContext } from 'react';
import { Input, makeStyles } from '@material-ui/core';
import { SiteFormContext } from '../state/SiteFormContext';

const useStyles = makeStyles(() => ({
    input: {
        border: "none",
        width: 183,
        height: 55,
        borderRadius: 15,
        backgroundColor: "white",
        fontWeight: 600,
        fontSize: 20
    },
}))

export const Floor = (props) => {
    const classes = useStyles();
    const { floorInput } = useContext(SiteFormContext);
    const [floor] = floorInput;

    const onBlurFloor = (e, id) => {
        console.log(floor)
        if (floor.length > id) {
            floor[id].name = e.target.value
        }
        else {
            if (e.target.value != '') {
                floor.push({
                    name: e.target.value
                })
            }
        }
    }

    const onBlurDesk = (e, id) => {
        if (floor.length > id) {
            floor[id].openDesk = e.target.value
        }
        else {
            if (e.target.value != '') {
                floor.push({
                    openDesk: e.target.value
                })
            }
        }
    }

    return (
        <div style={{ marginBottom: 25 }} key={props.id}>
            <Input
                className={classes.input}
                id={`floor-id-${props.id}`}
                placeholder="Floor No."
                disableUnderline={true}
                style={{ marginRight: 15, paddingLeft: 15 }}
                onBlur={(event, id) => onBlurFloor(event, props.id)}
            />
            <Input
                className={classes.input}
                id={`desk-id-${props.id}`}
                placeholder="Desks"
                disableUnderline={true}
                style={{ paddingLeft: 15 }}
                onBlur={(event, id) => onBlurDesk(event, props.id)}
            />
        </div>
    )
}