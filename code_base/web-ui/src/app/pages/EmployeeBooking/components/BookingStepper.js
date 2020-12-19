import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    borderRadius: 1,
  },
  vertical: {
    padding: 0,
    paddingLeft: 2,
  }
})(StepConnector);

function ColorlibStepIcon(props) {
  const { completed } = props;

  return (
      < svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="16" cy="16" r="16" fill={completed ? "rgb(38, 50, 56, .3)" : "#E6E6E6" } />
        <circle cx="16" cy="16" r="12" fill="white" className='inner' />
        <circle cx="16" cy="16" r="9" fill={completed ? "#407BFF" : "#E6E6E6" } />
      </svg >
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Site', 'Floor', 'Date', 'Desk', 'Confirm Booking'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Tap to select a Site';
    case 1:
      return 'Tap to select a floor';
    case 2:
      return 'Tap to select a Date';
    case 3:
      return 'A desk will be selected automatically';
    case 4:
      return 'Confirm Booking'
    default:
      return 'Unknown step';
  }
}

export function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <StepConnector></StepConnector>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
