import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import AppsIcon from "@material-ui/icons/Apps";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

const userInfo = {
    avatar: "/static/images/avatar/1.jpg",
    email: "Emailaddress@gmail.com",
    orgName: "Organization Name",
    joinDate: "6 November, 2020",
};

const useStyles = makeStyles((theme) => ({
    userInfo: {
        backgroundColor: "white",
        color: "black",
        borderRadius: "40px 40px 40px 40px",
        margin: "20px",
        paddingBottom: "30px",
        width: "381px",
        height: "262px",
    },

    avatar: {
        border: "3px solid white",
        width: "100px",
        height: "100px",
    },
    userItem: {
        justifyContent: "center",
    },
    list: {
        backgroundColor: "white",
        color: "black",
        borderRadius: "40px 40px 40px 40px",
        margin: "20px",
        width: "381px",
        height: "427px",
    },
}));

const navList = [
    {
        text: "Notifications",
        icon: <AppsIcon />,
    },
    {
        text: "Edit profile",
        icon: <EditIcon />,
    },
    {
        text: "Log out",
        icon: <ExitToAppIcon />,
    },
    {
        text: "New Updates",
        icon: <NewReleasesIcon />,
    },
    {
        text: "Help",
        icon: <HelpIcon />,
    },
    {
        text: "Feedback",
        icon: <FeedbackIcon />,
    },
    {
        text: "Terminate Account",
        icon: <FeedbackIcon />,
    },
];

export default function Account() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.userInfo}>
                <div className={classes.userItem}>
                    <Avatar src={userInfo.avatar} className={classes.avatar} />
                </div>
                {[userInfo.email, userInfo.orgName].map((text) => (
                    <ListItem key={text} style={{ padding: 0 }}>
                        <ListItemText
                            primary={text}
                            style={{ textAlign: "center" }}
                        />
                    </ListItem>
                ))}
            </div>

            <List className={classes.list}>
                {navList.map((option) => (
                    <ListItem button key={option.text} aria-label={option.text}>
                        <ListItemIcon edge="start">{option.icon}</ListItemIcon>
                        <ListItemText primary={option.text} />
                    </ListItem>
                ))}
                <ListItemText
                    primary={"Joined on " + userInfo.joinDate}
                    style={{ textAlign: "center", padding: 20 }}
                />
            </List>
        </div>
    );
}
