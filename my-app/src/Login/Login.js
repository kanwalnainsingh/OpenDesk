import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '50ch'
		}
	}
}));

export default function StateTextFields() {
	const classes = useStyles();
	const [ name, setName, googleId, facebookId, corporateMail, emailAddress, password ] = React.useState('');
	const handleChange = (event) => {
		setName(event.target.value);
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField
					id="googleId"
					label="Continue using GOOGLE"
					value={googleId}
					onChange={handleChange}
					variant="outlined"
				/>
				<TextField
					id="emailAddress"
					label="Email address"
					value={emailAddress}
					onChange={handleChange}
					variant="outlined"
				/>
			</div>
			<div>
				<TextField
					id="facebbokId"
					label="Continue using FACEBOOK"
					value={facebookId}
					onChange={handleChange}
					variant="outlined"
				/>
				<TextField id="password" label="Password" value={password} onChange={handleChange} variant="outlined" />
			</div>
			<div>
				<TextField
					id="corporateMail"
					label="Use Corporate Email"
					value={corporateMail}
					onChange={handleChange}
					variant="outlined"
				/>
				<Link>Forgot password?</Link>

				<FormControlLabel
					value="end"
					control={<Checkbox color="primary" />}
					label="Keep me logged in"
					labelPlacement="end"
				/>
			</div>

			<Button variant="contained" color="primary" className={classes.button} endIcon={<Icon />}>
				Continue
			</Button>
		</form>
	);
}
