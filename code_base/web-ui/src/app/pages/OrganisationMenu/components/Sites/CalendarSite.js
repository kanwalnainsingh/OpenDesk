import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    DatePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ToolbarCalendar from './ToolbarCalendar';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "inherit",
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
            color: "white",
            // height: "31.875rem"
        },
        '& .MuiPickersBasePicker-pickerView':{
            maxWidth: "100%",
        },
        '& .MuiPickersDatePickerRoot-dateLandscape': {
            // paddingRight: "0"
            float: "left !important",
            '& .MuiButton-label': {
                justifyContent: "flex-end !important",
            }
        },
        '& .MuiPickersBasePicker-pickerView.MuiPickersBasePicker-pickerViewLandscape': {
            position: "relative",
            width: "100%",
            height: "80%",
            // border: "1px solid red",
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
        },
        '& button.MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-iconButton': {
            borderRadius: "0%",
            padding: "0",
            background: "transparent",
            color: "#FFFFFF",
            fontSize: "3.125rem",
        },
        '& p.MuiTypography-root.MuiTypography-body1.MuiTypography-alignCenter': {
            color: "#FFFFFF",
            height: "100%",
            fontSize: "1.25rem",
            verticalAlign: "top",
        },
        '& .MuiPickersCalendarHeader-switchHeader': {
            position: "absolute",
            marginTop: "0",
            width: "96%",
            bottom: "0",
        },
        '& .MuiPickersBasePicker-container.MuiPickersBasePicker-containerLandscape': {
            height: "100%",
        },
        '& .MuiPickersSlideTransition-transitionContainer.MuiPickersCalendar-transitionContainer': {
            marginTop: "10%",
        }
    },
}));

export default function CalendarSite() {
    const classes = useStyles();
    const [date, changeDate] = useState(new Date());
    const [actualMonth, changeActualMonth] = useState(new Date());
    /**
     * Left arrow date show
     */
    let monthDateLeftArrow = new Date(actualMonth);
    monthDateLeftArrow.setMonth(monthDateLeftArrow.getMonth()-1);
    const monthLeftArrow = (monthDateLeftArrow.toLocaleString('default', { month: 'long' }));
    /**
     * Right arrow date show
     */
    let monthDateRightArrow = new Date(actualMonth);
    monthDateRightArrow.setMonth(monthDateRightArrow.getMonth()+1);
    const monthRightArrow = (monthDateRightArrow.toLocaleString('default', { month: 'long' }));
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
                    onMonthChange={changeActualMonth}
                    leftArrowIcon = 
                    {
                        <div>
                            {monthLeftArrow.substr(0,3)}
                        </div>
                    }
                    rightArrowIcon = {
                        <div>
                            {monthRightArrow.substr(0,3)}
                        </div>
                    } 
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}
