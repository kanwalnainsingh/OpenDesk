import React from "react";
 import { makeStyles} from "@material-ui/core/styles";
 import Toolbar from '@material-ui/core/Toolbar';

 const useStyle = makeStyles((theme) => ({
     toolbar:{
         fontWeight: "600",
         fontSize: "1rem",
         lineHeight: "1.5rem",
         alignItems: "center",
         textAlign: "center",
         letterSpacing: "0.01rem",
         color: "#FFFFFF",
         marginTop: "4.38%",
         minHeight: "0"
     },
     date: {
         width: "100%",
         textAlign: "center",
         alignItems: "center",
         color: "black",
         fontFamily: "Poppins",
         fontWeight: 500
     }
   }));

 export default function ToolbarCalendar(date) {
     const dateFormat= new Date(date);
     const month = dateFormat.toLocaleString('default', { month: 'short' });
     const formatted_date = dateFormat.getDate() + " " + month + ", " + (dateFormat.getFullYear())
     const classes = useStyle();
       return (
         <Toolbar className={classes.toolbar}>
             <div className={classes.date} id="headerToolbarCalendar">
                 {month}
             </div>
         </Toolbar>
     );
 } 