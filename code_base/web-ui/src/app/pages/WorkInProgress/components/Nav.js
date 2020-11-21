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
        <Container>
          <Toolbar>
            <div>
              <img
                style={{ width: "4rem" }}
                alt="Logo"
                src={toAbsoluteUrl("/media/logos/red-logo.png")}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
