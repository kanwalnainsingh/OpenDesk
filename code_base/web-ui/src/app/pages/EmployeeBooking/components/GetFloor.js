import React, { useContext } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Box from '@material-ui/core/Box';
import { StepContext } from '../state/StepContext';
import { FormContext } from '../state/FormContext';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 330,
        height: 196,
        marginTop: 3,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        [theme.breakpoints.up('lg')]: {
            margin: '30px 0 0 100px',
            height: 'auto',
        },
        '& .MuiToggleButton-root': {
            textTransform: 'none',
            color: '#263238',
            fontSize: 16,
            border: 'none',
            margin: '10px 20px 20px 10px',
        }
    },
    buttonGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.up('lg')]: {
            flexWrap: 'nowrap'
        }
    }
}));

const NumberButton = styled(ToggleButton)`
    width: 30px;
    height: 27px;
    font-size: 18px;
`;

function getFloors() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}

export const GetFloor = () => {
    const classes = useStyles();
    const mockFloors = getFloors();
    const { floorInput } = useContext(FormContext);
    const [floor, setFloor] = floorInput;
    const [activeStep, setActiveStep] = useContext(StepContext);

    const handleFloor = (event, newFloorNumber) => {
        setFloor(newFloorNumber);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div style={{ margin: '0 0 24px 5px' }}>
            <Typography style={{ fontSize: 16 }}>Tap to select a floor</Typography>
            <Box className={classes.root}>
                <ToggleButtonGroup className={classes.buttonGroup} exclusive value={floor} onChange={handleFloor} aria-label="floor number">
                    {mockFloors.map((mock) =>
                        <NumberButton onClick={handleNext} value={mock} aria-label={mock}>{mock}</NumberButton>
                    )}
                </ToggleButtonGroup>
            </Box>
        </div>
    )
};