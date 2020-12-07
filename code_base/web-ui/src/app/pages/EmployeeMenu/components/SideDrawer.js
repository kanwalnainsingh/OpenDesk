import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import TuneIcon from '@material-ui/icons/Tune';
import Switches from './Switches';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import EditIcon from '@material-ui/icons/Edit';
import AppsIcon from '@material-ui/icons/Apps';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import theme from '../Index';

const userInfo = {
  avatar: '/static/images/avatar/1.jpg',
  email: 'Emailaddress@gmail.com',
  orgName: 'Organization Name',
  joinDate: '6 November, 2020'
};

const defaultsInfo = {
  site: '2464 Royal Ln. Mesa, New Jersey 45463',
  floor: '2nd Floor'
};

const UserInfo = styled(List)`
  background-color: #407BFF;
  color: #fff;
  border-radius: 0px 0px 40px 40px;
  padding-bottom: 30px;

  .avatar {
    border: 3px solid white;
    width: 100px;
    height: 100px;
    margin-top: -40px;
    margin-bottom: 50px;
  }

  .oval-shadow {
    position: absolute;
    width: 106px;
    height: 10px;
    left: 145px;
    top: 90px;
    background: #263238;
    opacity: 0.3;
    filter: blur(9px);
  }
`;

const UserItem = styled(ListItem)`
    justify-content: center;
`;

const Defaults = styled(List)`
  background-color: #263238;
  color: #fff;
  border-radius: 0px 0px 40px 40px;
  padding-top: 50px;
  padding-bottom: 20px;
  z-index: -1;
  margin-top: -50px;
`;

const DefaultsItem = styled(ListItemText)`
    height: 20px;
    width: 250px;
`;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor: '#407BFF',
  }
}));

const navList = [
  {
    text: 'View all bookings',
    icon: <AppsIcon />
  },
  {
    text: 'Calendar view',
    icon: <DateRangeIcon />
  },
  {
    text: 'Edit profile',
    icon: <EditIcon />
  },
  {
    text: 'Log out',
    icon: <ExitToAppIcon />
  },
  {
    text: 'New Updates',
    icon: <NewReleasesIcon />
  },
  {
    text: 'Help',
    icon: <HelpIcon />
  },
  {
    text: 'Feedback',
    icon: <FeedbackIcon />
  }]

export default function SideDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={{ style: { theme } }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <UserInfo>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon style={{ fill: "white" }} />
            </IconButton>
          </div>
          <UserItem>
            <Avatar
              src={userInfo.avatar}
              className="avatar" />
              <div class="oval-shadow"></div>
          </UserItem>
          {[userInfo.email, userInfo.orgName].map((text) => (
            <ListItem key={text} className="user-text" style={{ padding: 0 }}>
              <ListItemText primary={text} style={{ textAlign: "center" }} />
            </ListItem>
          ))}
        </UserInfo>
        <Defaults>
          <ListItem key="defaults">
            <ListItemIcon>
              <TuneIcon style={{ fill: "white" }} />
            </ListItemIcon>
            <DefaultsItem primary="Defaults" />
            <Switches />
          </ListItem>

          <ListItem key="site">
            <ListItemText primary="Site" />
            <DefaultsItem primary={defaultsInfo.site} />
            <IconButton
              aria-label="Edit Site"
              edge="start">
              <EditIcon style={{ fill: "white" }} />
            </IconButton>
          </ListItem>

          <ListItem key="floor">
            <ListItemText primary="Floor" />
            <DefaultsItem primary={defaultsInfo.floor} />
            <IconButton
              aria-label="Edit Floor"
              edge="start">
              <EditIcon style={{ fill: "white" }} />
            </IconButton>
          </ListItem>

          <ListItem key="autofill">
            <ListItemIcon>
              <BorderAllIcon style={{ fill: "white" }} />
            </ListItemIcon>
            <DefaultsItem primary="Auto-fill last selections" />
            <Switches />
          </ListItem>
        </Defaults>

        <List>
          {navList.map((option) => (
            <ListItem
              button key={option.text}
              aria-label={option.text}>
              <ListItemIcon
                edge="start">
                {option.icon}
              </ListItemIcon>
              < ListItemText primary={option.text} />
            </ListItem>
          ))}
        </List>
        <ListItemText primary={"Joined on " + userInfo.joinDate}
          style={{ textAlign: "center", padding: 20 }} />
      </Drawer>
    </div >
  );
}