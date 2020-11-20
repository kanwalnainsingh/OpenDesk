import React from "react";
import Mobile from "./components/mobile/Mobile";
import Desktop from "./components/desktop/Desktop";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const WorkInProgress = () => {
  const theme = useTheme();
  const mobileBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));
  return <>{mobileBreakPoint ? <Mobile /> : <Desktop />}</>;
};
