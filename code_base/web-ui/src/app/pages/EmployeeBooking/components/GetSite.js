import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { StepContext } from '../state/StepContext';
import { FormContext } from '../state/FormContext';

function mockSiteData() {
    return ['1901 Thornridge Cir. Shiloh, Hawaii 81063',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '1901 Thornridge Cir. Shiloh, Hawaii 81063',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '1901 Thornridge Cir. Shiloh, Hawaii 81063',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',
        '1901 Thornridge Cir. Shiloh, Hawaii 81063',
        '2715 Ash Dr. San Jose, South Dakota 83475',
        '2972 Westheimer Rd. Santa Ana, Illinois 85486',
        '8502 Preston Rd. Inglewood, Maine 98380',];
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        position: 'aboslute',
        '& .MuiToggleButton-root': {
            textTransform: 'none',
            color: '#263238',
            fontSize: 16,
            textAlign: 'left',
            border: 'none',
            borderTop: '1px solid #C4C4C4',
            width: 310,
            margin: '0 10px 10px 0px',
            [theme.breakpoints.up('lg')]: {
                border: '1px solid #C4C4C4',
            },
        },
    },
    label: {
        fontSize: 16,
        width: 310,
        padding: '0 0 24px 5px'
    },
    gridList: {
        width: 330,
        height: 450,
        [theme.breakpoints.up('lg')]: {
            width: 1100,
        },
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'unset',
            marginLeft: 100,
        },
    }
}));

export function GetSite() {
    const classes = useStyles();
    const sites = mockSiteData();
    const { siteInput } = useContext(FormContext);
    const [site, setSite] = siteInput;
    const [activeStep, setActiveStep] = useContext(StepContext);

    const handleSite = (event, newSelectedSite) => {
        setSite(newSelectedSite);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div className={classes.root}>
            <Typography className={classes.label}>Tap to select a Site</Typography>
            <GridList cellHeight={160} className={classes.gridList}>
                <ToggleButtonGroup exclusive value={site} onChange={handleSite} aria-label="site" cols={3} className={classes.buttonGroup}>
                    {sites.map((mockSite, index) => (
                        <ToggleButton value={mockSite} aria-label={mockSite} cols={2} onClick={handleNext}>
                            {mockSite}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </GridList>
        </div>
    );
}