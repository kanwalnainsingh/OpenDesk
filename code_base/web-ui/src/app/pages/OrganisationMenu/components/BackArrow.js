import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import { toAbsoluteUrl } from "../../../utils/utils";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    root: {
      height: "100vh",
      flexGrow: 1,
      display: "flex",
    },
  }));

export default function BackArrow() {
    const classes = useStyle();
      // mobile
      return (
        <Link to ='/organisation' className={classes.link}>
        <img
            src={toAbsoluteUrl("/media/employees/icons/backArrow.svg")}
        />
        </Link>
    );
} 
