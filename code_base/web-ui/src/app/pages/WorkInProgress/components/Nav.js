import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar } from "@material-ui/core";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { toAbsoluteUrl } from "../../../utils/utils";

export default function Nav() {
  return (
    <div style={{paddingTop: "1rem"}}>
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
          <Toolbar>
            <div>
              <img
                style={{ width: "3.5rem" }}
                alt="Logo"
                src={toAbsoluteUrl("/media/logo.svg")}
              />
            </div>
          </Toolbar>
      </AppBar>
    </div>
  );
}
