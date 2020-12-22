import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import { toAbsoluteUrl } from "../../../utils/utils";

import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          margin: theme.spacing(1),
        },
        color: "#FFFFFF",
        backgroundColor: "#407BFF",
        width: "14.75rem",
        marginTop: "8.688rem",
        borderRadius: "1.25rem",
        textAlign: "center"
      },
    buttons: {
        // flexGrow: 1,
        display: 'inline-block',
       /* flexDirection: 'row',
        alignItems: 'center',
        '& > *': {
        margin: theme.spacing(1),
        },
        color: "#FFFFFF",
        backgroundColor: "#407BFF",*/
        // width: "14.75rem",
        /*height: "3.75rem",
        paddingLeft: "5.5rem",
        top: "40.75rem",
        borderRadius: "1.25rem"*/
    }
    
}));

export default function ButtonsMobile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup>
                <IconButton className={classes.buttons}>
                    <img src={toAbsoluteUrl("/media/employees/icons/menuIconBuilding.svg")}/>
                </IconButton>
                <IconButton>
                    <img src={toAbsoluteUrl("/media/employees/icons/menuIconEmployee.svg")}/>
                </IconButton>
                <IconButton >
                    <img src={toAbsoluteUrl("/media/employees/icons/menuIconKey.svg")}/>
                </IconButton>
            </ButtonGroup>

        </div>
        
    );
}