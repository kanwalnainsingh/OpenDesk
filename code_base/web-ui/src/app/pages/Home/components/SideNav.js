import React, { useContext } from "react";
import { toAbsoluteUrl } from "../../../utils/utils";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, withRouter } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { StepContext } from "./HowItWorks/contexts/stepContext";

// const drawerWidth = 100;

const useStyles = (curPage, pageBackground) =>
  makeStyles((theme) => ({
    drawer: {
      width: curPage === "/home" ? 0 : 128,
      flexShrink: 0,
    },
    drawerPaper: {
      display: "flex",
      justifyContent: "space-between",
      width: curPage === "/home" ? 0 : 130,
      backgroundColor: pageBackground,
      color: "white",
      boxShadow: "-5px 0px 18px #0000003b",
      transition: "background-color 0.3s",
    },
    drawerBorder: {
      border: "none",
    },
    listContainer: {
      "& div[role=button]": {
        justifyContent: "center",
        marginBottom: theme.spacing(3),
        alignItems: "center",
        textAlign: "center",
      },
      "& a": {
        color: "white",
        textDecoration: "none",
      },
    },
    selected: {
      "& div[role=button]": {
        background: "#ffffff54",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    toolbar: {
      textAlign: "center",
      marginTop: theme.spacing(3),
      padding: " 1rem 0",
      "& button": {
        "& img": {
          width: "2rem",
        },
      },
    },
  }));

function SideNav(props) {
  const curPage = props.curPage;
  const { curStep } = useContext(StepContext);
  let pageBackground;
  if (curPage === "/home/about") {
    pageBackground = "#FF575F";
  } else if (curPage === "/home/howitworks") {
    switch(curStep){
      case 0:
        pageBackground = "#407BFF"
        break
      case 1:
        pageBackground = "#FF8A34"
        break
      case 2:
        pageBackground = "#25C685"
        break
      case 3:
        pageBackground = "#FF575F"
        break
      case 4:
        pageBackground = "#BA68C8"
        break
    }
    
  } else if (curPage === "/home/contactus") {
    pageBackground = "#25C685";
  }
  const classes = useStyles(curPage, pageBackground)();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
        paperAnchorRight: classes.drawerBorder,
      }}
      anchor="right"
    >
      <div className={classes.toolbar}>
        <Button>
          <img src={toAbsoluteUrl("/media/home/icons/back-arrow.png")} alt="" />
        </Button>
      </div>
      <List className={classes.listContainer}>
        <NavLink to="/home">
          <ListItem button>
            <Box py={2} fontWeight="bold">
              Home
            </Box>
          </ListItem>
        </NavLink>
        <NavLink to="/home/about" activeClassName={classes.selected}>
          <ListItem button>
            <Box py={2} fontWeight="bold">
              About Us
            </Box>
          </ListItem>
        </NavLink>
        <NavLink to={`/home/howitworks`} activeClassName={classes.selected}>
          <ListItem button>
            <Box py={2} fontWeight="bold">
              How it Works
            </Box>
          </ListItem>
        </NavLink>
        <NavLink to={`/home/contactus`} activeClassName={classes.selected}>
          <ListItem button>
            <Box py={2} fontWeight="bold">
              Contact Us
            </Box>
          </ListItem>
        </NavLink>
      </List>
      <div className={classes.toolbar}>
        <Button>
          <img src={toAbsoluteUrl("/media/home/icons/next-arrow.png")} alt="" />
        </Button>
      </div>
    </Drawer>
  );
}

export default withRouter(SideNav);
