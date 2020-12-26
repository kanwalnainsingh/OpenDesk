import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


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
        '& .MuiPickersToolbarButton-toolbarBtn': {
            float: "right",
            width: "47%",
            height: "30px",
            '& .MuiButton-label': {
                justifyContent: "start",
            }
            
        },
        '& .MuiPickersToolbarText-toolbarTxt': {
            fontWeight: "600",
            fontSize: "1rem !important",
            opacity: "1",
            // marginRight: "30%",
            
        },
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
                    // orientation="landscape"
                    variant="static"
                    openTo="date"
                    value={date}
                    onChange={changeDate}
                    // renderInput={(props) => <TextField {...props} />}
                />
                {/* <div class="MuiPickersStaticWrapper-staticWrapperRoot"><div class="MuiPickersBasePicker-container MuiPickersBasePicker-containerLandscape"><div class="MuiToolbar-root MuiToolbar-regular MuiPickersToolbar-toolbar MuiPickersDatePickerRoot-toolbar MuiPickersDatePickerRoot-toolbarLandscape MuiPickersToolbar-toolbarLandscape MuiToolbar-gutters"><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiPickersToolbarButton-toolbarBtn" tabindex="0" type="button"><span class="MuiButton-label"><h6 class="MuiTypography-root MuiPickersToolbarText-toolbarTxt MuiTypography-subtitle1">2020</h6></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiPickersToolbarButton-toolbarBtn MuiPickersDatePickerRoot-dateLandscape" tabindex="0" type="button"><span class="MuiButton-label"><h4 class="MuiTypography-root MuiPickersToolbarText-toolbarTxt MuiPickersToolbarText-toolbarBtnSelected MuiTypography-h4 MuiTypography-alignLeft">Fri, Dec 25</h4></span><span class="MuiTouchRipple-root"></span></button></div><div class="MuiPickersBasePicker-pickerView MuiPickersBasePicker-pickerViewLandscape"><div><div class="MuiPickersCalendarHeader-daysHeader"><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">Su</span><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">Mo</span><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">Tu</span><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">We</span><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">Th</span><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">Fr</span><span class="MuiTypography-root MuiPickersCalendarHeader-dayLabel MuiTypography-caption">Sa</span></div>

                </div><div class="MuiPickersSlideTransition-transitionContainer MuiPickersCalendar-transitionContainer"><div><div class="MuiPickersCalendar-week"><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-hidden" tabindex="-1" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">29</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-hidden" tabindex="-1" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">30</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">1</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">2</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">3</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">4</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">5</p></span><span class="MuiTouchRipple-root"></span></button></div></div><div class="MuiPickersCalendar-week"><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">6</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">7</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">8</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">9</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">10</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">11</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">12</p></span><span class="MuiTouchRipple-root"></span></button></div></div><div class="MuiPickersCalendar-week"><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">13</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">14</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">15</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">16</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">17</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">18</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">19</p></span><span class="MuiTouchRipple-root"></span></button></div></div><div class="MuiPickersCalendar-week"><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">20</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">21</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">22</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">23</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">24</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">25</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">26</p></span><span class="MuiTouchRipple-root"></span></button></div></div><div class="MuiPickersCalendar-week"><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">27</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">28</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">29</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">30</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day" tabindex="0" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">31</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-hidden" tabindex="-1" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">1</p></span><span class="MuiTouchRipple-root"></span></button></div><div role="presentation"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-hidden" tabindex="-1" type="button"><span class="MuiIconButton-label"><p class="MuiTypography-root MuiTypography-body2 MuiTypography-colorInherit">2</p></span><span class="MuiTouchRipple-root"></span></button></div></div></div></div>

                <div class="MuiPickersCalendarHeader-switchHeader"><button class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><div class="MuiPickersSlideTransition-transitionContainer MuiPickersCalendarHeader-transitionContainer"><p class="MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter">December 2020</p></div><button class="MuiButtonBase-root MuiIconButton-root MuiPickersCalendarHeader-iconButton" tabindex="0" type="button"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path><path fill="none" d="M0 0h24v24H0V0z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div> 
                </div></div></div> */}

            </MuiPickersUtilsProvider>
        </div>
    );
}
