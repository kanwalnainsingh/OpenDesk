import React from 'react';

import TextField from '@material-ui/core/TextField';

import Aux from '../../../../HOC/Auxiliary'
import './Location.css'

const location = (props) => {
    return (
        <Aux>
            <div className="locationBox">
                <span className="location">Location</span>
                <TextField id="outlined-basic" variant="outlined" className="locationInput" onChange={props.locationInput}/>
                <span className="pickButton">PICK ON MAP</span>
            </div>
        </Aux>
    )
}

export default location;