import React, { useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Button from "@material-ui/core/Button";
import { steplist } from "./steplist";
import Steps from "./Steps";
import { StepContext } from "./contexts/stepContext";

const useStyle = (stepperColor) =>
  makeStyles((theme) => ({
    root: {
      margin: theme.spacing(5),
      flexWrap: "wrap",
    },
    title:{
        fontWeight:'bold'
    },
    stepper: {
      "& button": {
        color: stepperColor,
      },
    },
    dots: {
      marginRight: theme.spacing(7),
      marginLeft: theme.spacing(7),
    },
    stepperPaper: {
      backgroundColor: "transparent",
    },
    dotActive: {
      backgroundColor: stepperColor,
    },
  }));

export default function HowItWorks(props) {
  const theme = useTheme();
  const { curStep, setCurStep } = useContext(StepContext);
  const [steps] = useState(steplist);
  const handleNext = () => {
    setCurStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurStep((prevActiveStep) => prevActiveStep - 1);
  };
  const showStep = steps.find(({ stepid }) => stepid === curStep);
  let stepperColor;
  switch (curStep) {
    case 0:
      stepperColor = "#407BFF";
      break;
    case 1:
      stepperColor = "#FF8A34";
      break;
    case 2:
      stepperColor = "#25C685";
      break;
    case 3:
      stepperColor = "#FF575F";
      break;
    case 4:
      stepperColor = "#BA68C8";
      break;
  }

  const classes = useStyle(stepperColor)();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
      justify="space-between"
    >
      <Typography className={classes.title}>HOW IT WORKS</Typography>

      <Steps
        title={showStep.title}
        description={showStep.description}
        image={showStep.image}
      />

      <MobileStepper
        variant="dots"
        steps={5}
        className={classes.stepper}
        position="static"
        activeStep={curStep}
        classes={{
          root: classes.stepperPaper,
          dotActive: classes.dotActive,
          dots: classes.dots,
        }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={curStep === 4}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={curStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Grid>
  );
}
