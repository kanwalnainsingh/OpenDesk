import React from 'react';

import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import BackupTwoToneIcon from '@material-ui/icons/BackupTwoTone';

const floor = (props) => {
    return (
        <div style={{ display: 'flex', marginTop: '2%' }}>
            <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '20%' }} label="Floor" />
            <TextField id="filled-basic" InputProps={{ shrink: "true", disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Total Desk" type="number" />
            <TextField id="filled-basic" InputProps={{ shrink: "true", disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%', backgroundColor: 'rgb(176,224,230)', borderRadius: '5px' }} label="Open Desk" type="number" />
            <TextField id="filled-basic" InputProps={{ shrink: "true", disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Reserved" type="number" />
            <input type="file" hidden id={props.inputId} onChange={props.afterFileUpload} />
            <FormControl variant="filled" style={{ marginLeft: '2%', width: '20%' }}>
                <InputLabel htmlFor="filled-adornment-password">Desk Plan</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    style={{ height: '60px' }}
                    value={props.displayValue}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={() => props.iconClick(props.inputId)}
                                edge="end"
                            >
                                <BackupTwoToneIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
}

export default floor;