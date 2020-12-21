import React, { createContext } from 'react';

export const StepContext = createContext();

export const StepProvider = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleFinish = () => {
        alert('Congrats')
    };

    return (
        <StepContext.Provider value= {[activeStep, setActiveStep]} handleNext={handleNext} handleBack={handleBack}>
            {props.children}
        </StepContext.Provider>
    )
}