import React from 'react';

import TextField from '@material-ui/core/TextField';

import Aux from '../../../../HOC/Auxiliary'
import './SiteName.css'

const siteName = (props) => {
    return (
        <Aux>
            <div className="box">
                <span className="name">Site Name</span>
                <TextField id="outlined-basic" variant="outlined" className="nameInput"/>
            </div>

        </Aux>
    )
}

export default siteName;