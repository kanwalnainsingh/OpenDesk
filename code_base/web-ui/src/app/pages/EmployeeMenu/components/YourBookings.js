import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import BookingCard from './BookingCard';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EventIcon from '@material-ui/icons/Event';
import { IconButton } from '@material-ui/core';
import { Calendar } from './Calendar';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: "20px"
    },
    yourBookings: {
        backgroundColor: "white",
        height: "auto",
        borderRadius: "40px 40px 0 0",
        paddingTop: 15
    },
    icons: {
        display: "flex",
        alignItems: "center",
        marginRight: 30
    }
}));

const YourBookingsTitle = styled(Typography)`
    padding-left: 31px;
    color: black;
    font-size: 18px;
`;

export const YourBookings = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.background}>
            <div className={classes.yourBookings}>
                <div className={classes.icons}>
                    <YourBookingsTitle>Your Bookings</YourBookingsTitle>
                    <div style={{ marginLeft: "auto" }}>
                        <IconButton>
                            <CheckBoxOutlineBlankIcon />
                        </IconButton>
                        <IconButton>
                            <ListAltIcon />
                        </IconButton>
                        <IconButton>
                            <EventIcon />
                        </IconButton>
                    </div>
                </div>
                <div>
                    <BookingCard />
                </div>
                <div>
                    <Calendar />
                </div>
            </div>
        </div>
    );
}