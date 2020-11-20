import React from 'react';

import TextField from '@material-ui/core/TextField';

import Aux from '../../../../HOC/Auxiliary'
import './Location.css'

const location = (props) => {
    return (
        <Aux>
            <div className="locationBox">
                <span className="location">Location</span>
                {/* <input type="text" className="locationInput"/> */}
                <TextField id="outlined-basic" variant="outlined" className="locationInput"/>
                <span className="pickButton">PICK ON MAP</span>
            </div>
        </Aux>
    )
}

export default location;