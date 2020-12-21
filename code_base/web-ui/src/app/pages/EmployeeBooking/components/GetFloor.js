import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
    root: {
        width: 330,
        height: 196,
        marginTop: 3,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    }
}));

const NumberButton = styled(ToggleButton)`
    width: 30px;
    height: 27px;
    '& $label' : {
        width: 30px;
    }
`;

function getFloors() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}

export const GetFloor = () => {
    const classes = useStyles();
    const mockFloors = getFloors();
    const [floor, setFloor] = React.useState();

    const handleFloor = (event, newFloorNumber) => {
        setFloor(newFloorNumber);
    };

    return (
        <div style={{ margin: '0 0 24px 5px' }}>
            <Typography style={{ fontSize: 16 }}>Tap to select a floor</Typography>
            <Box className={classes.root}>
                <ToggleButtonGroup exclusive value={floor} onChange={handleFloor} aria-label="floor number">
                    {mockFloors.map((mock) =>
                        <NumberButton value={mock} aria-label={mock}>{mock}</NumberButton>
                    )}
                </ToggleButtonGroup>
            </Box>
        </div>
    )
};