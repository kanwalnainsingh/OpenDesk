import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import './FloorDetails.css'


const floorDetails = (props) => {
    return (

        <div className="floorDiv">
            <div className="formDisplay">
                <span className="floorName">Floor</span>
                <TextField id="outlined-basic" variant="outlined" className="floorNameInput"/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <div className="formDisplay">
                <span className="openDesk">Opendesks</span>
                <TextField id="outlined-basic" variant="outlined" className="floorNameInput"/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <div className="formDisplay">
                <span className="busyDesk">Busydesks</span>
                <TextField id="outlined-basic" variant="outlined" className="floorNameInput"/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <FontAwesomeIcon icon="file-upload" className="uploadButton"/>
            <p className="uploadText">Upload Desk Plan</p>
            <p className="helpText">Only Excel files can be uploaded</p>
        </div>
    )
}

export default floorDetails;