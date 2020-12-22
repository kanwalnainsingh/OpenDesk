import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Switches from './Switches';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import EditIcon from '@material-ui/icons/Edit';
import theme from '../Index';
import { NavBar } from '../components/NavBar'
import SvgIcon from '@material-ui/core/SvgIcon';
import Box from '@material-ui/core/Box'

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

const paddingNavItems = 30;

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
    height: 3px;
    left: 166px;
    top: 90px;
    background: #263238;
    opacity: 1;
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
    height: 25px;
    width: 280px;
`;

const WrapperDrawer = styled(Drawer)`
  & div{border: 0;
        direction: rtl;
        text-align: left;}
`;

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: 'flex',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundColor: '#407BFF',
    width: 411,
  }
}));

const navList = [
  {
    text: 'View all bookings',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6.5C4 5.96957 4.21071 5.46086 4.58579 5.08579C4.96086 4.71071 5.46957 4.5 6 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V8.5C10 9.03043 9.78929 9.53914 9.41421 9.91421C9.03914 10.2893 8.53043 10.5 8 10.5H6C5.46957 10.5 4.96086 10.2893 4.58579 9.91421C4.21071 9.53914 4 9.03043 4 8.5V6.5Z" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 6.5C14 5.96957 14.2107 5.46086 14.5858 5.08579C14.9609 4.71071 15.4696 4.5 16 4.5H18C18.5304 4.5 19.0391 4.71071 19.4142 5.08579C19.7893 5.46086 20 5.96957 20 6.5V8.5C20 9.03043 19.7893 9.53914 19.4142 9.91421C19.0391 10.2893 18.5304 10.5 18 10.5H16C15.4696 10.5 14.9609 10.2893 14.5858 9.91421C14.2107 9.53914 14 9.03043 14 8.5V6.5Z" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16.5C4 15.9696 4.21071 15.4609 4.58579 15.0858C4.96086 14.7107 5.46957 14.5 6 14.5H8C8.53043 14.5 9.03914 14.7107 9.41421 15.0858C9.78929 15.4609 10 15.9696 10 16.5V18.5C10 19.0304 9.78929 19.5391 9.41421 19.9142C9.03914 20.2893 8.53043 20.5 8 20.5H6C5.46957 20.5 4.96086 20.2893 4.58579 19.9142C4.21071 19.5391 4 19.0304 4 18.5V16.5Z" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 16.5C14 15.9696 14.2107 15.4609 14.5858 15.0858C14.9609 14.7107 15.4696 14.5 16 14.5H18C18.5304 14.5 19.0391 14.7107 19.4142 15.0858C19.7893 15.4609 20 15.9696 20 16.5V18.5C20 19.0304 19.7893 19.5391 19.4142 19.9142C19.0391 20.2893 18.5304 20.5 18 20.5H16C15.4696 20.5 14.9609 20.2893 14.5858 19.9142C14.2107 19.5391 14 19.0304 14 18.5V16.5Z" stroke="#263238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </SvgIcon>
  },
  {
    text: 'Calendar view',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11.5H9V13.5H7V11.5ZM7 15.5H9V17.5H7V15.5ZM11 11.5H13V13.5H11V11.5ZM11 15.5H13V17.5H11V15.5ZM15 11.5H17V13.5H15V11.5ZM15 15.5H17V17.5H15V15.5Z" fill="#263238"/>
            <path d="M5 22.5H19C20.103 22.5 21 21.603 21 20.5V6.5C21 5.397 20.103 4.5 19 4.5H17V2.5H15V4.5H9V2.5H7V4.5H5C3.897 4.5 3 5.397 3 6.5V20.5C3 21.603 3.897 22.5 5 22.5ZM19 8.5L19.001 20.5H5V8.5H19Z" fill="#263238"/>
          </SvgIcon>
    
  },
  {
    text: 'Edit profile',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 17.96V21C3 21.28 3.22 21.5 3.5 21.5H6.54C6.67 21.5 6.8 21.45 6.89 21.35L17.81 10.44L14.06 6.69L3.15 17.6C3.05 17.7 3 17.82 3 17.96ZM20.71 7.54C20.8027 7.44749 20.8762 7.3376 20.9264 7.21663C20.9766 7.09565 21.0024 6.96597 21.0024 6.835C21.0024 6.70403 20.9766 6.57435 20.9264 6.45338C20.8762 6.33241 20.8027 6.22252 20.71 6.13L18.37 3.79C18.2775 3.6973 18.1676 3.62375 18.0466 3.57357C17.9257 3.52339 17.796 3.49756 17.665 3.49756C17.534 3.49756 17.4043 3.52339 17.2834 3.57357C17.1624 3.62375 17.0525 3.6973 16.96 3.79L15.13 5.62L18.88 9.37L20.71 7.54Z" fill="#263238"/>
          </SvgIcon>
    
  },
  {
    text: 'Log out',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 6.5C7.26522 6.5 7.51957 6.39464 7.70711 6.20711C7.89464 6.01957 8 5.76522 8 5.5C8 5.23478 7.89464 4.98043 7.70711 4.79289C7.51957 4.60536 7.26522 4.5 7 4.5H5C4.73478 4.5 4.48043 4.60536 4.29289 4.79289C4.10536 4.98043 4 5.23478 4 5.5V19.5C4 19.7652 4.10536 20.0196 4.29289 20.2071C4.48043 20.3946 4.73478 20.5 5 20.5H7C7.26522 20.5 7.51957 20.3946 7.70711 20.2071C7.89464 20.0196 8 19.7652 8 19.5C8 19.2348 7.89464 18.9804 7.70711 18.7929C7.51957 18.6054 7.26522 18.5 7 18.5H6V6.5H7ZM20.82 11.92L18 7.92C17.8471 7.70441 17.615 7.55814 17.3545 7.51317C17.0941 7.4682 16.8264 7.52818 16.61 7.68C16.5018 7.75579 16.4098 7.85224 16.3391 7.96381C16.2684 8.07537 16.2206 8.19982 16.1982 8.32998C16.1759 8.46015 16.1796 8.59344 16.2091 8.72217C16.2386 8.8509 16.2933 8.97252 16.37 9.08L18.09 11.5H10C9.73478 11.5 9.48043 11.6054 9.29289 11.7929C9.10536 11.9804 9 12.2348 9 12.5C9 12.7652 9.10536 13.0196 9.29289 13.2071C9.48043 13.3946 9.73478 13.5 10 13.5H18L16.2 15.9C16.1212 16.0051 16.0639 16.1246 16.0313 16.2518C15.9987 16.379 15.9915 16.5114 16.01 16.6414C16.0286 16.7714 16.0726 16.8965 16.1395 17.0095C16.2064 17.1225 16.2949 17.2212 16.4 17.3C16.5731 17.4298 16.7836 17.5 17 17.5C17.1552 17.5 17.3084 17.4639 17.4472 17.3944C17.5861 17.325 17.7069 17.2242 17.8 17.1L20.8 13.1C20.9281 12.9309 20.999 12.7254 21.0026 12.5133C21.0062 12.3011 20.9423 12.0934 20.82 11.92Z" fill="#263238"/>
          </SvgIcon>
    
  },
  {
    text: 'New Updates',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.02 11.49V18.5C19.02 19.05 18.57 19.5 18.02 19.5H6.00002C5.45002 19.5 5.00002 19.05 5.00002 18.5V6.5C5.00002 5.95 5.45002 5.5 6.00002 5.5H13C13.55 5.5 14 5.05 14 4.5C14 3.95 13.55 3.5 13 3.5H5.02002C3.92002 3.5 3.02002 4.4 3.02002 5.5V19.5C3.02002 20.6 3.92002 21.5 5.02002 21.5H19C19.5305 21.5 20.0392 21.2893 20.4142 20.9142C20.7893 20.5391 21 20.0304 21 19.5V11.49C21 10.94 20.56 10.5 20.01 10.5C19.46 10.5 19.02 10.94 19.02 11.49ZM13.25 11.25L12.46 9.5C12.4202 9.41271 12.3562 9.3387 12.2755 9.2868C12.1948 9.2349 12.1009 9.2073 12.005 9.2073C11.9091 9.2073 11.8152 9.2349 11.7345 9.2868C11.6538 9.3387 11.5898 9.41271 11.55 9.5L10.76 11.25L9.00002 12.04C8.91273 12.0798 8.83872 12.1438 8.78682 12.2245C8.73492 12.3052 8.70732 12.3991 8.70732 12.495C8.70732 12.5909 8.73492 12.6848 8.78682 12.7655C8.83872 12.8462 8.91273 12.9102 9.00002 12.95L10.75 13.74L11.54 15.5C11.5798 15.5873 11.6438 15.6613 11.7245 15.7132C11.8052 15.7651 11.8991 15.7927 11.995 15.7927C12.0909 15.7927 12.1848 15.7651 12.2655 15.7132C12.3462 15.6613 12.4102 15.5873 12.45 15.5L13.24 13.75L15 12.96C15.0873 12.9202 15.1613 12.8562 15.2132 12.7755C15.2651 12.6948 15.2927 12.6009 15.2927 12.505C15.2927 12.4091 15.2651 12.3152 15.2132 12.2345C15.1613 12.1538 15.0873 12.0898 15 12.05L13.25 11.25ZM17.94 6.56L17.34 5.24C17.21 4.95 16.79 4.95 16.65 5.24L16.05 6.56L14.73 7.16C14.44 7.29 14.44 7.71 14.73 7.85L16.05 8.45L16.65 9.77C16.78 10.06 17.2 10.06 17.34 9.77L17.94 8.45L19.26 7.85C19.55 7.72 19.55 7.3 19.26 7.16L17.94 6.56Z" fill="#263238"/>
          </SvgIcon>
    
  },
  {
    text: 'Help',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.5C6.486 2.5 2 6.986 2 12.5C2 18.014 6.486 22.5 12 22.5C17.514 22.5 22 18.014 22 12.5C22 6.986 17.514 2.5 12 2.5ZM13 18.5H11V16.5H13V18.5ZM13.976 13.615C13.78 13.773 13.591 13.924 13.441 14.074C13.033 14.481 13.001 14.851 13 14.867V15H11V14.833C11 14.715 11.029 13.656 12.026 12.659C12.221 12.464 12.463 12.266 12.717 12.06C13.451 11.465 13.933 11.031 13.933 10.433C13.9214 9.92782 13.7125 9.44725 13.3511 9.09412C12.9896 8.74099 12.5043 8.54334 11.999 8.54347C11.4937 8.5436 11.0085 8.7415 10.6472 9.09482C10.286 9.44814 10.0774 9.92881 10.066 10.434H8.066C8.066 8.265 9.831 6.5 12 6.5C14.169 6.5 15.934 8.265 15.934 10.434C15.934 12.031 14.755 12.984 13.976 13.615Z" fill="#263238"/>
          </SvgIcon>
    
  },
  {
    text: 'Feedback',
    icon: <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2.5H4.01001C2.91001 2.5 2.01001 3.4 2.01001 4.5V22.5L6.00001 18.5H20C21.1 18.5 22 17.6 22 16.5V4.5C22 3.4 21.1 2.5 20 2.5ZM13 14.5H11V12.5H13V14.5ZM13 9.5C13 10.05 12.55 10.5 12 10.5C11.45 10.5 11 10.05 11 9.5V7.5C11 6.95 11.45 6.5 12 6.5C12.55 6.5 13 6.95 13 7.5V9.5Z" fill="#263238"/>
          </SvgIcon>
    
  }]

export default function SideDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={{ style: { theme } }}>
      <CssBaseline />
      <NavBar
        handleDrawerOpen={() => setOpen(true)} />
      <WrapperDrawer
        variant="elevation"
        anchor="left"
        open={open}
        onBackdropClick={handleDrawerClose}
      >
        <UserInfo>
          <div className={classes.drawerHeader} style={{ direction: "ltr", paddingRight: 10}}>
            <IconButton onClick={handleDrawerClose} style={{ position: "relative", right: 15 }}>
              <ChevronLeftIcon style={{ fill: "white" }} />
            </IconButton>
          </div>
          <UserItem>
            <Avatar
              src={userInfo.avatar}
              className="avatar" />
            <div className="oval-shadow"></div>
          </UserItem>
            <ListItem key={userInfo.email} className="user-text" style={{ padding: 0 }}>
              <ListItemText primary={
                <Box fontWeight="fontWeightBold" style={{ textAlign: "center", fontSize: '20px' }}>
                  {userInfo.email}
                </Box>}
              />
            </ListItem>
            <ListItem key={userInfo.orgName} className="user-text" style={{ padding: 0 }}>
              <ListItemText primary={userInfo.orgName} style={{ textAlign: "center" }} />
            </ListItem>
        </UserInfo>
        <Defaults style={{ direction: "ltr"}}>
          <ListItem key="defaults" style={{ paddingLeft: paddingNavItems, paddingTop: 25 }}>
            <ListItemIcon style={{ position: "relative", right: 30 }}>
              <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5.00001C8.73478 5.00001 8.48043 5.10537 8.29289 5.2929C8.10536 5.48044 8 5.73479 8 6.00001C8 6.26523 8.10536 6.51958 8.29289 6.70712C8.48043 6.89465 8.73478 7.00001 9 7.00001C9.26522 7.00001 9.51957 6.89465 9.70711 6.70712C9.89464 6.51958 10 6.26523 10 6.00001C10 5.73479 9.89464 5.48044 9.70711 5.2929C9.51957 5.10537 9.26522 5.00001 9 5.00001ZM6.17 5.00001C6.3766 4.41448 6.75974 3.90744 7.2666 3.5488C7.77346 3.19015 8.37909 2.99756 9 2.99756C9.62091 2.99756 10.2265 3.19015 10.7334 3.5488C11.2403 3.90744 11.6234 4.41448 11.83 5.00001H19C19.2652 5.00001 19.5196 5.10537 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001C20 6.26523 19.8946 6.51958 19.7071 6.70712C19.5196 6.89465 19.2652 7.00001 19 7.00001H11.83C11.6234 7.58554 11.2403 8.09258 10.7334 8.45122C10.2265 8.80986 9.62091 9.00246 9 9.00246C8.37909 9.00246 7.77346 8.80986 7.2666 8.45122C6.75974 8.09258 6.3766 7.58554 6.17 7.00001H5C4.73478 7.00001 4.48043 6.89465 4.29289 6.70712C4.10536 6.51958 4 6.26523 4 6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10537 4.73478 5.00001 5 5.00001H6.17ZM15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8947 14.7348 13 15 13C15.2652 13 15.5196 12.8947 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12.17 11C12.3766 10.4145 12.7597 9.90744 13.2666 9.5488C13.7735 9.19015 14.3791 8.99756 15 8.99756C15.6209 8.99756 16.2265 9.19015 16.7334 9.5488C17.2403 9.90744 17.6234 10.4145 17.83 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8947 19.2652 13 19 13H17.83C17.6234 13.5855 17.2403 14.0926 16.7334 14.4512C16.2265 14.8099 15.6209 15.0025 15 15.0025C14.3791 15.0025 13.7735 14.8099 13.2666 14.4512C12.7597 14.0926 12.3766 13.5855 12.17 13H5C4.73478 13 4.48043 12.8947 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.17ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8947 8.73478 19 9 19C9.26522 19 9.51957 18.8947 9.70711 18.7071C9.89464 18.5196 10 18.2652 10 18C10 17.7348 9.89464 17.4804 9.70711 17.2929C9.51957 17.1054 9.26522 17 9 17ZM6.17 17C6.3766 16.4145 6.75974 15.9074 7.2666 15.5488C7.77346 15.1902 8.37909 14.9976 9 14.9976C9.62091 14.9976 10.2265 15.1902 10.7334 15.5488C11.2403 15.9074 11.6234 16.4145 11.83 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8947 19.2652 19 19 19H11.83C11.6234 19.5855 11.2403 20.0926 10.7334 20.4512C10.2265 20.8099 9.62091 21.0025 9 21.0025C8.37909 21.0025 7.77346 20.8099 7.2666 20.4512C6.75974 20.0926 6.3766 19.5855 6.17 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6.17Z" fill="white"/>
              </SvgIcon>
            </ListItemIcon>
            <DefaultsItem primary="Defaults"/>
            <Switches />
          </ListItem>

          <ListItem key="site" style={{ paddingLeft: paddingNavItems }}>
            <ListItemText primary="Site" />
            <DefaultsItem primary={defaultsInfo.site} />
            <IconButton
              aria-label="Edit Site"
              edge="start">
              <EditIcon style={{ fill: "white" }} />
            </IconButton>
          </ListItem>

          <ListItem key="floor" style={{ paddingLeft: paddingNavItems }}>
            <ListItemText primary="Floor" />
            <DefaultsItem primary={defaultsInfo.floor} />
            <IconButton
              aria-label="Edit Floor"
              edge="start">
              <EditIcon style={{ fill: "white" }} />
            </IconButton>
          </ListItem>

          <ListItem key="autofill" style={{ paddingLeft: paddingNavItems }}>
            <ListItemIcon style={{ position: "relative", right: 30 }}>
              <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 23H11V1H13V23ZM9 19H5V5H9V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H9V19ZM19 7V9H21V7H19ZM19 5H21C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3V5ZM21 15H19V17H21V15ZM19 11V13H21V11H19ZM17 3H15V5H17V3ZM19 21C20.11 21 21 20.11 21 19H19V21ZM17 19H15V21H17V19Z" fill="white"/>
              </SvgIcon>
            </ListItemIcon>
            <DefaultsItem primary="Auto-fill last selections" />
            <Switches />
          </ListItem>
        </Defaults>

        <List>
          {navList.map((option) => (
            <ListItem
              button key={option.text}
              aria-label={option.text}
              style={{ paddingLeft: 0,
                       paddingBottom: 10,
                       direction: "ltr" }}>
              <ListItemIcon
                edge="start">
                {option.icon}
              </ListItemIcon>
              < ListItemText primary={option.text} style={{ paddingLeft: 25 }} />
            </ListItem>
          ))}
        </List>
        <ListItemText primary={"Joined on " + userInfo.joinDate}
          style={{ textAlign: "center" }} />
      </WrapperDrawer>
    </div >
  );
}