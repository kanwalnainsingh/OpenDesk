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
                <TextField id="floor" variant="outlined" className="floorNameInput" onChange={props.floorInput}/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <div className="formDisplay">
                <span className="openDesk">OpenDesks</span>
                <TextField id="opendesk" variant="outlined" className="floorNameInput" onChange={props.opendeskInput}/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <div className="formDisplay">
                <span className="busyDesk">ReservedDesks</span>
                <TextField id="reservedesk" variant="outlined" className="floorNameInput"/>
            </div>
            <Divider style={{marginTop:'30px'}}/>
            <FontAwesomeIcon icon="file-upload" className="uploadButton"/>
            <p className="uploadText">Upload Desk Plan</p>
            <p className="helpText">Only Excel files can be uploaded</p>
        </div>
    )
}

export default floorDetails;