import React, { createContext, useState } from "react";

export const StepContext = createContext();

export function StepProvider(props) {
  const [curStep, setCurStep] = useState(0);

  return (
    <StepContext.Provider value={{ curStep, setCurStep }}>
      {props.children}
    </StepContext.Provider>
  );
}
