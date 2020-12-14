import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardActionArea } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#263238",
        paddingTop: "20px"
    },
    makeBooking: {
        backgroundColor: theme.palette.primary.main,
        height: 200,
        borderRadius: 40,
        paddingTop: 20
    }
}));

const GridBooking = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 27px 0 27px 0;
`;

const MakeBookingTitle = styled(Typography)`
    padding-left: 31px;
    color: #FFFFFF;
    font-size: 18px;
`;

const BookCard = styled(Card)`
    display: flex;
    justify-content: center;
    margin: 0 15px 0 15px;
    width: 159px;
    height: 83px;
    border-radius: 20px;
`;

const BookCardAction = styled(CardActionArea)`
    text-align: center;
    margin: 0;
    padding: 0;
`;

const BoxTitle = styled(Typography)`
    font-size: 18px;
`;

const BoxSubtitle = styled(Typography)`
    font-size: 12px;
    color: rgba(38, 50, 56, .5);
    font-weight: 600;
`;

export const MakeBooking = () => {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <div className={classes.makeBooking}>
                <MakeBookingTitle>Make a Booking</MakeBookingTitle>
                <GridBooking>
                    <BookCard>
                        <BookCardAction >
                                <BoxTitle>QUICK<br></br>BOOKING</BoxTitle>
                                <BoxSubtitle>Use defaults</BoxSubtitle>
                        </BookCardAction>
                    </BookCard>
                    <BookCard>
                        <BookCardAction>
                                <BoxTitle>FULL<br></br>BOOKING</BoxTitle>
                                <BoxSubtitle>Select Everything</BoxSubtitle>
                        </BookCardAction>
                    </BookCard>
                </GridBooking>
            </div>
        </div>
    );
}