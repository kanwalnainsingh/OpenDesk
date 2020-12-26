import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    DatePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ToolbarCalendar from './ToolbarCalendar';


const useStyles = makeStyles((theme) => ({
    root: {
        
        flexGrow: 1,
        display: "flex",
        '& .MuiPickersToolbar-toolbar': {
            width: "100%",
            background: "#407BFF",
            maxWidth: "100%",
            display: "inline-block",
            minHeight: "1%",
            height: "2%",
            padding: "0",
        },
        '& .MuiPickersBasePicker-container': {
            display: "inline-block",
        },
        '& .MuiPickersStaticWrapper-staticWrapperRoot':{
            width: "100%",
            borderRadius: "40px",
            background: "#407BFF",
            color: "white"
        },
        '& .MuiPickersBasePicker-pickerView':{
            maxWidth: "100%",
        },
        /*'& .MuiPickersToolbarButton-toolbarBtn': {
            float: "right",
            width: "47%",
            height: "30px",
            '& .MuiButton-label': {
                // justifyContent: "start",
            }
            
        },
        '& .MuiPickersToolbarText-toolbarTxt': {
            fontWeight: "600",
            fontSize: "1rem !important",
            opacity: "1",
            // marginRight: "30%",
            
        },*/
        '& .MuiPickersDatePickerRoot-dateLandscape': {
            // paddingRight: "0"
            float: "left !important",
            '& .MuiButton-label': {
                justifyContent: "flex-end !important",
            }
        },
        '& .MuiPickersCalendarHeader-dayLabel': {
            color: "white",
            fontSize: "0.875rem",
        },
        '& .MuiPickersDay-day': {
            color: "white",
            fontSize: "0.875rem",
        },
        '& button.MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-iconButton':{
            height: "10px",
            width: "0.7%"
        }
    },
}));

export default function CalendarSite() {
    const classes = useStyles();
    const [date, changeDate] = useState(new Date());
    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    id = "datePicker"
                    className={classes.datePicker}
                    autoOk
                    ToolbarComponent={
                        (toolbarProps) => (ToolbarCalendar(date))
                    }
                    variant="static"
                    openTo="date"
                    value={date}
                    onChange={changeDate}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}
