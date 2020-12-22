import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    employeesInvited: {
        fontWeight: "600",
    },
    employeesList: {
        paddingTop: "0.875rem",
        fontWeight: "bold",
    }
    
}));

export default function Labels() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.employeesInvited}> 1672 Employees Invited </div>
            <div className={classes.employeesList}> Check Employees List </div> 
        </div>
    );
}