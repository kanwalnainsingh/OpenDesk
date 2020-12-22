import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    employeesLabel: {
        color: "#FFFFFF",
        width: "17.625rem",
        height: "4.688rem",
        fontWeight: "bold",
        fontSize: "3.125rem",
        lineHeight: "4.688rem",
        width: "100%",
        textAlign: "center"
      }
    
}));

export default function EmployeesLabel() {
    const classes = useStyles();

    return (
        <div className={classes.employeesLabel}> Employees </div>
    );
}