import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
        borderRadius: "1.25rem",
        textAlign: "center",
        marginTop: "-2%"
      },
      group: {
          width: "100%",
      },
      buttons: {
        flexGrow: 1,
        display: 'inline-block',
    }
    
}));

export default function ButtonsMobile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup className={classes.group}>
                <IconButton className={classes.buttons}>
                    <img src={toAbsoluteUrl("/media/employees/icons/menuIconBuilding.svg")}/>
                </IconButton>
                <IconButton className={classes.buttons}>
                    <img src={toAbsoluteUrl("/media/employees/icons/menuIconEmployee.svg")}/>
                </IconButton>
                <IconButton className={classes.buttons}>
                    <img src={toAbsoluteUrl("/media/employees/icons/menuIconKey.svg")}/>
                </IconButton>
            </ButtonGroup>

        </div>
        
    );
}