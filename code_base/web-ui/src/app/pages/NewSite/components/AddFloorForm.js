import React, { useState, useContext } from 'react';
import { Button, formatMs, FormControl, Input, makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SiteFormContext } from '../state/SiteFormContext';
import { Floor } from '../components/Floor';

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

export const AddFloorForm = () => {
    const classes = useStyles();
    const width600 = useMediaQuery('(min-width:600px)');

    const [floors, setFloors] = useState({ count: [1] })
    const [floorDetails, setFloorDetails] = useState([<Floor key={0} id={0} />])

    const handleAddFloor = () => {
        let floorArray = [...floors.count]
        let id = floors.count[floors.count.length - 1] + 1
        floorArray.push(id)
        setFloors({ count: floorArray })

        for (let i = 0; i < floors.count.length; i++) {
            let displayFloor = [...floorDetails]
            displayFloor.push(<Floor key={floors.count[i]} id={floors.count[i]} />)

            setFloorDetails(displayFloor)
        }
    }

    if (width600) {
        return (
            <div className={classes.root}>
                <form>
                    <div id="floors" className={classes.margin}>
                        {floorDetails}
                    </div>
                </form>
                <Button
                    onClick={handleAddFloor}
                    className={classes.addFloor}>ADD FLOOR</Button>
            </div>
        )
    } else {
        return (
            <div className={classes.root}>
                <Typography variant="h4" style={{ position: "absolute", top: -80, color: "white", fontWeight: 600 }}>FLOORS</Typography>
                <form>
                    <div id="floors" className={classes.margin}>
                        {floorDetails}
                    </div>
                </form>
                <Button
                    onClick={handleAddFloor}
                    className={classes.addFloor}>ADD FLOOR</Button>
            </div>
        )
    }
}

