import React, { useState, useContext } from 'react';
import { Button, formatMs, FormControl, Input, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SiteFormContext } from '../state/SiteFormContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20,
        position: "relative"
    },
    margin: {
        margin: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    input: {
        border: "none",
        width: 183,
        height: 55,
        borderRadius: 15,
        backgroundColor: "white",
        fontWeight: 600,
        fontSize: 20
    },
    addFloor: {
        width: 381,
        height: 55,
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: 42,
        fontWeight: 600,
        fontSize: 18
    }
}))

const Floor = (props) => {
    const classes = useStyles();
    const { floorInput, deskInput } = useContext(SiteFormContext);
    const [floor, setFloor] = floorInput;
    const [desk, setDesk] = deskInput;

    const onChangeFloor = (e) => {
        setFloor(e.target.value);
    }

    const onChangeDesk = (e) => {
        setDesk(e.target.value);
    }

    return (
        <div style={{ marginBottom: 25 }}>
            <Input
                className={classes.input}
                id={props.id}
                placeholder="Floor No."
                disableUnderline={true}
                style={{ marginRight: 15, paddingLeft: 15 }}
                onChange={(event) => onChangeFloor(event)}
            />
            <Input
                className={classes.input}
                id="desks"
                placeholder="Desks"
                disableUnderline={true}
                style={{ paddingLeft: 15 }}
                onChange={(event) => onChangeDesk(event)}
            />
        </div>
    )
}

let floorId = 1;

export const AddFloorForm = () => {
    const [inputList, setInputList] = useState([<Floor id="floor-id-0" />]);
    const classes = useStyles();
    const width600 = useMediaQuery('(min-width:600px)');

    const onAddBtnClick = () => {
        setInputList([...inputList, < Floor id={`floor-id-${floorId}`} />]);
        floorId++;
    };

    if (width600) {
        return (
            <div className={classes.root}>
                <FormControl>
                    <div id="floors" className={classes.margin}>
                        {inputList}
                    </div>
                </FormControl>
                <Button
                    onClick={onAddBtnClick}
                    className={classes.addFloor}>ADD FLOOR</Button>
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Typography variant="h4" style={{ position: "absolute", top: -80, color: "white", fontWeight: 600 }}>FLOORS</Typography>
                <FormControl>
                    <div id="floors" className={classes.margin}>
                        {inputList}
                    </div>
                </FormControl>
                <Button
                    onClick={onAddBtnClick}
                    className={classes.addFloor}>ADD FLOOR</Button>
            </div>
        )
    }
}

