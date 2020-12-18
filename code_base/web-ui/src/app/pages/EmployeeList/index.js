import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Container from '@material-ui/core/Container';
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';
import Calendar from './components/Calendar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

import BlueCard from './components/BlueCard';

import { MakeBooking } from './components/MakeBooking';

const small = [1,2,3,4,5,6]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontFamily: "Popins",
    },
    gridContainer: {
        padding: 0
    },
    title: {
        fontSize: 18,
        fontWeight: 600
    },
    headerContainer: {
        background: "#407BFF",
        height: "50px",
        paddingRight: "0",
        paddingLeft: "0"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 15px",
        background: "white",
        borderRadius: "40px 40px 0 0"
    },
    grid: {
        padding: "25px 0",
    },
    gridBigCard: {
        display: "flex",
        overflow: "scroll",
        padding: "0 50px",
    },
    side: {
        background: "#407BFF"
    },
    cardContainer: {
        margin: "20px",
        padding: "30px"
        },
    smallCardContainer:{
        margin: 0,
        width: "100%"
    },
        icons: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        },
        icon: {
            margin: 5,
            paddingLeft: 5
        },
        iconActive: {
            color: "white",
            background: "#407BFF",
            borderRadius: "5px",
            padding: 5,
        },
        breakpoints: {
            values: {
              xs: 0,
              sm: 100,
              md: 960,
              lg: 1280,
              xl: 1920,
            },
          },
  }));
  

const EmployeeList = () => {
    const [listBig, setListBig] = useState(true);
    const [listSmall, setListSmall] = useState(false);
    const [calendar, setCalendar] = useState(false);
    const classes = useStyles();


    return (
        <Grid spacing={3}>   
            <Grid item xs={12}>
            {listBig && <MakeBooking />}
            {listSmall && <MakeBooking />}
            <Container className={classes.headerContainer}>
            <Grid className={classes.header}>
                <Container>
                    <Typography className={classes.title}>Your bookings</Typography>
                </Container>
                <Container className={classes.icons}>
                    <SvgIcon className={!listBig?classes.icon:classes.iconActive} 
                                        onClick={() => {setListBig(true); 
                                        setListSmall(false); 
                                        setCalendar(false)}}>
                                            <path fill="currentColor" d="M15 7V16H10V7H15M21 5H18V18H21V5M17 5H8V18H17V5M7 5H4V18H7V5Z" />
                                        </SvgIcon>  
                    

                    <FormatListBulletedIcon className={!listSmall?classes.icon:classes.iconActive} 
                                            onClick={() => {setListBig(false); 
                                            setListSmall(true); 
                                            setCalendar(false)}}/>

                    <SvgIcon className={!calendar?classes.icon:classes.iconActive} 
                                        onClick={() => {setListBig(false); 
                                        setListSmall(false); 
                                        setCalendar(true);}}>
                                            <path fill="currentColor" d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z" />
                                        </SvgIcon>
                </Container>
            </Grid>
            
            {calendar && <BlueCard />}
                <Grid className={classes.grid}>
                    {listBig && (
                        <Grid className={classes.gridBigCard}>
                            {small.map(x => (
                                <Grid className={classes.cardContainer}>
                                    <BigCard item xs={8} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {listSmall && (
                        <Grid>
                           {small.map(x => (
                                <Grid className={classes.smallCardContainer}>
                                    <SmallCard item xs={8} />
                                </Grid>
                           ))}
                        </Grid>
                    )}
                    {
                        calendar && (
                            <Calendar />
                        )
                    }
                </Grid>
                </Container>
            </Grid>
        </Grid>
    );
};

export default EmployeeList;