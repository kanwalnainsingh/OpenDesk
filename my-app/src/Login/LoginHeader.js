import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Button, Icon, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	toolbar: {
		minHeight: 128,
		alignItems: 'flex-start',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		alignSelf: 'flex-end'
	}
}));

export default function ProminentAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" color="white">
				<Toolbar className={classes.toolbar}>
					<IconButton edge="start" className={classes.avatar} color="inherit" aria-label="open drawer">
						<Avatar src="/broken-image.jpg" />
					</IconButton>
					<Typography className={classes.title} variant="h5" noWrap />
					<IconButton aria-label="search" color="inherit">
						<Link color="black">Contact Us</Link>
					</IconButton>
					<IconButton aria-label="display more actions" edge="end" color="inherit">
						<Link color="black">About Us</Link>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
