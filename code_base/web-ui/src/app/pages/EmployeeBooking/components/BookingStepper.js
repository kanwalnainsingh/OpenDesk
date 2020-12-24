import React, { useState, useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepContent } from '@material-ui/core';
import { GetSite } from './GetSite';
import { GetFloor } from './GetFloor';
import { GetDate } from './GetDate';
import { GetDesk } from './GetDesk';
import IconButton from '@material-ui/core/IconButton';
import { BinIcon } from '../icons/BinIcon';
import { StepContext } from '../state/StepContext';
import { FormContext } from '../state/FormContext';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& .MuiStepLabel-label': {
      fontSize: 20
    },
    '& .MuiStepper-root': {
      paddingBottom: 0
    },
    '& .MuiButton-label': {
      position: 'relative',
      top: -250,
      left: 30,
      fontSize: 20,
      fontWeight: 600,
      color: 'white'
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    borderLeft: '4px solid #eaeaf0',
    margin: "0 14px"
  },
  line: {
    width: 4,
    height: 106,
    border: 0,
    position: 'absolute',
    left: 39,
  }
}));

const ColorlibConnector = withStyles({
  active: {
    '& $line': {
      backgroundColor:
        '#F2F2F2',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#263238',
      opacity: .3,
      width: 4,
    },
    '.innerClass': {
      backgroundColor: '#407BFF',
    }
  },
  line: {
    width: 4,
    height: 100,
    border: 0,
    backgroundColor: '#eaeaf0',
  },
  vertical: {
    padding: 0,
    paddingLeft: 2,
  }
})(StepConnector);

function CircleIcon(props) {
  const { completed } = props;
  return (
    < svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <circle cx="16" cy="16" r="16" fill={completed ? "rgb(38, 50, 56, .3)" : "#E6E6E6"} />
      <circle cx="16" cy="16" r="12" fill="white" className='inner' />
      <circle cx="16" cy="16" r="9" fill={completed ? "#407BFF" : "#E6E6E6"} />
    </svg >
  );
}

function getSteps() {
  return ['Site', 'Floor', 'Date', 'Desk', 'Confirm Booking'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GetSite />;
    case 1:
      return <GetFloor />;
    case 2:
      return <GetDate />;
    case 3:
      return <GetDesk />;
  }
}

export function BookingStepper() {

  const [activeStep, setActiveStep] = useContext(StepContext);
  const { siteInput, floorInput, dateInput } = useContext(FormContext);
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const selected = [siteInput, floorInput, dateInput.toString().slice(0, 15), 'A desk will be selected automatically'];

  return (
    <div className={classes.root}>
      <div className={classes.line} style={activeStep <= 0 ? {
        backgroundColor: '#eaeaf0',
        top: 0,
      } : {
          backgroundColor: 'rgb(38, 50, 56, .3)',
          top: 0,
        }}></div>
      <div className={classes.line} style={activeStep <= 4 ? {
        backgroundColor: '#eaeaf0',
        bottom: '1vh',
        height: 200,
        left: 38,
        zIndex: -10
      } : {
          backgroundColor: 'rgb(38, 50, 56, .3)',
          bottom: '1vh',
          height: 200,
          left: 38,
          zIndex: -10
        }}></div>
      <Typography style={{ padding: '22px 0 30px 79px', fontWeight: 600, fontSize: 20 }}>NEW BOOKING</Typography>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <div style={{ height: 75, width: 75, overflow: 'hidden', position: 'relative', right: 0, top: 0 }}>
          <IconButton style={{ position: 'absolute', height: 150, width: 150, right: -75, top: -75, borderRadius: 100, backgroundColor: '#407BFF', paddingTop: 75, paddingRight: 75 }}>
            <BinIcon />
          </IconButton>
        </div>
      </div>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className={classes.labelFont} StepIconComponent={CircleIcon}>
              <div style={{ position: 'relative' }}>
                {label}
                {index < activeStep &&
                  <div style={{ position: 'absolute', height: 48, width: 310, paddingTop: 10 }}>
                    <Typography>{selected[index]}</Typography>
                  </div>}
              </div>
            </StepLabel>
            <StepContent className={classes.content}>
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === 5 &&
          <div style={{ height: 100, overflow: 'hidden', position: 'relative' }}>
            <Button onClick={handleNext} className={classes.button} style={{ position: 'absolute', height: 528, width: 528, left: 11, bottom: -450, borderRadius: '100%', backgroundColor: '#407BFF', paddingTop: 75, paddingRight: 75 }}>
              BOOK DESK
            </Button>
          </div>
        }
      </div>
      <div>
        {activeStep === 6 &&
          <div style={{ height: 100, overflow: 'hidden', position: 'relative' }}>
            <Button className={classes.button} style={{ position: 'absolute', height: 528, width: 528, left: 11, bottom: -450, borderRadius: '100%', backgroundColor: '#407BFF', paddingTop: 75, paddingRight: 75 }}>
              OKAY
            </Button>
          </div>
        }
      </div>
    </div >
  );
}