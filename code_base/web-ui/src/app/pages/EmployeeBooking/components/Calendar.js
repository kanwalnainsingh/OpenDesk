import 'date-fns';
import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { StepContext } from '../state/StepContext';
import { FormContext } from '../state/FormContext';

export const Calendar = () => {
    const { dateInput } = useContext(FormContext);
    const [selectedDate, setSelectedDate] = dateInput;
    const [activeStep, setActiveStep] = useContext(StepContext);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        handleNext();
    };

    const handleNext = () => {
        setActiveStep(5);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    disablePast
                    variant="static"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
} 