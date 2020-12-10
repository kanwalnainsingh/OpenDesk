import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import Container from '@material-ui/core/Container';
import BigCard from './components/BigCard';
import SmallCard from './components/SmallCard';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
        display: "flex",
        justifyContent: "space-between"
    },
    grid: {
        padding: "25px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    side: {
        background: "#407BFF"
    },
    cardContainer: {
        margin: 25
        },
        icons: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
        },
        icon: {
            margin: 5,
        },
        iconActive: {
            color: "white",
            background: "#407BFF",
            borderRadius: "5px",
            padding: 5
        }
  }));
  

const EmployeeList = () => {
    const [list, setList] = useState(false);
    const [listSmall, setListSmall] = useState(false);
    const [calendar, setCalendar] = useState(false);
    const classes = useStyles();


    return (
        <Grid container spacing={3}>   
            <Grid  item xs={12}>
            <Grid className={classes.header}>
                <Container>
                    <h2>Your bookings</h2>
                </Container>
                <Container className={classes.icons}>
                    <CropPortraitIcon className={!list?classes.icon:classes.iconActive} 
                                            onClick={() => {setList(true); 
                                            setListSmall(false); 
                                            setCalendar(false)}}/>  
                    

                    <FormatListBulletedIcon className={!listSmall?classes.icon:classes.iconActive} 
                                            onClick={() => {setList(false); 
                                            setListSmall(true); 
                                            setCalendar(false)}}/>

                    <CalendarTodayIcon className={!calendar?classes.icon:classes.iconActive} 
                                        onClick={() => {setList(false); 
                                        setListSmall(false); 
                                        setCalendar(true);}}/>
                </Container>
            </Grid>
                <Grid className={classes.grid}>
                    {list && (
                        <>
                            <Grid className={classes.cardContainer}>
                                <BigCard item xs={8} />
                             </Grid>
                            <Grid className={classes.cardContainer}>
                                <BigCard item xs={8} />
                            </Grid>
                            <Grid className={classes.cardContainer}>
                                <BigCard item xs={8} />
                            </Grid>
                        </>
                    )}
                    {listSmall && (
                        <>
                         <Grid className={classes.cardContainer}>
                                <SmallCard item xs={8} />
                             </Grid>
                            <Grid className={classes.cardContainer}>
                                <SmallCard item xs={8} />
                            </Grid>
                            <Grid className={classes.cardContainer}>
                                <SmallCard item xs={8} />
                            </Grid>
                        </>
                    )}
                    {
                        calendar && (
                            <h1>Calendar</h1>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default EmployeeList;