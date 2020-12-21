import { Button, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { StepContext } from '../state/StepContext';

function mockSiteData() {
    return ['1901 Thornridge Cir. Shiloh, Hawaii 81063',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '4140 Parker Rd. Allentown, New Mexico 31134'];
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        borderBottom: '1px solid #C4C4C4',
        padding: '0 0 24px 5px'
    },
    gridList: {
        width: 500,
        height: 450,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column'
    }
}));

export function GetSite() {
    const classes = useStyles();
    const sites = mockSiteData();
    const [site, setSite] = React.useState('1901 Thornridge Cir. Shiloh, Hawaii 81063');
    const [activeStep, setActiveStep] = useContext(StepContext);

    const handleSite = (event, newSelectedSite) => {
        setSite(newSelectedSite);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div className={classes.root}>
            <Typography style={{ fontSize: 16 }}>Tap to select a Site</Typography>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                <ToggleButtonGroup exclusive value={site} onChange={handleSite} aria-label="site" cols={3} className={classes.buttonGroup}>
                    {sites.map((mockSite, index) => (
                        <ToggleButton value={index} aria-label={mockSite} cols={2} onClick={handleNext}>
                            {mockSite}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </GridList>
        </div>
    );
}