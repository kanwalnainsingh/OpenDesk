import React, { createContext } from 'react';

export const StepContext = createContext();

export const StepProvider = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <StepContext.Provider value= {[activeStep, setActiveStep]}>
            {props.children}
        </StepContext.Provider>
    )
}