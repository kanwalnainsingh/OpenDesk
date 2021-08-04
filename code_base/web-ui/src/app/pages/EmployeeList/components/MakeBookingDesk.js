import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#263238",
        paddingTop: "20px"
    },
    makeBooking: {
        backgroundColor: "#407BFF",
        height: 842,
        width: 472,
        borderRadius: "40px 40px 0 0",
        paddingTop: 20
    }
}));

export const MakeBookingDesk = () => {
    const classes = useStyles();

    return(
        <>
            <Container className={classes.makeBooking}>
                <Container>

                </Container>
                <Container>
                    <Typography>Make a booking</Typography>
                    <Button>Quick booking <b/> Use defaults</Button>
                    <Button>Full booking <b/> Select everything</Button>
                </Container>
            </Container>
        </>
    );
};
