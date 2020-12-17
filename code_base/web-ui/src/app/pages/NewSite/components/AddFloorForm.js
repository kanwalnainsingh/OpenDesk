import React, { useState } from 'react';
import { Button, FormControl, Input, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

const Floor = () => {
    const classes = useStyles();
    return (
        <div style={{ marginBottom: 25 }}>
            <Input
                className={classes.input}
                id="floor number"
                placeholder="Floor No."
                disableUnderline={true}
                style={{ marginRight: 15, paddingLeft: 15 }}
            />
            <Input
                className={classes.input}
                id="desks"
                placeholder="Desks"
                disableUnderline={true}
                style={{ paddingLeft: 15 }}
            />
        </div>
    )
}

export const AddFloorForm = () => {
    const [inputList, setInputList] = useState([]);
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    const onAddBtnClick = () => {
        setInputList(inputList.concat(<Floor />));
    };

    if (matches) {
        return (
            <div className={classes.root}>
                <FormControl>
                    <div id="floors" className={classes.margin}>
                        <div>
                            <Floor />
                        </div>
                        {inputList}
                    </div>
                </FormControl>
                <Button
                    onClick={() => onAddBtnClick()}
                    className={classes.addFloor}>ADD FLOOR</Button>
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Typography variant="h4" style={{ position: "absolute", top: -80, color: "white", fontWeight: 600 }}>FLOORS</Typography>
                <FormControl>
                    <div id="floors" className={classes.margin}>
                        <div>
                            <Floor />
                        </div>
                        {inputList}
                    </div>
                </FormControl>
                <Button
                    onClick={() => onAddBtnClick()}
                    className={classes.addFloor}>ADD FLOOR</Button>
            </div>
        )
    }
}

