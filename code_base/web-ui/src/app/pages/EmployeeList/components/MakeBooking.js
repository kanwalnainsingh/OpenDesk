 import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import Typography from '@material-ui/core/Typography';
 import styled from 'styled-components';
 import Card from '@material-ui/core/Card';
 import { CardActionArea } from '@material-ui/core';
 import Grid from '@material-ui/core/Grid';

 const useStyles = makeStyles((theme) => ({
     background: {
         backgroundColor: "#263238",
         paddingTop: "20px"
     },
     makeBooking: {
         backgroundColor: "#407BFF",
         height: 170,
         borderRadius: "40px 40px 0 0",
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
     font-weight: 600;
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
     font-weight: 600;
 `;

 const BoxSubtitle = styled(Typography)`
     font-size: 12px;
     color: rgba(38, 50, 56, .5);
     font-weight: 600;
     letter-spacing: 0.16px;
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
                                 <BoxSubtitle>Select everything</BoxSubtitle>
                         </BookCardAction>
                     </BookCard>
                 </GridBooking>
             </div>
         </div>
     );
 }