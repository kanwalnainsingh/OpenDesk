import React from 'react';

import Paper from '@material-ui/core/Paper';

import Aux from '../../HOC/Auxiliary'
import './SiteDetails.css'

const siteDetails = (props) => {
    return(
        <Aux>
            <Paper elevation={3} style={{width: '60%', height: '100%', padding: '20px', marginRight: '50px'}}>
                <h3>{props.name}</h3>
                <p>{props.location}</p>
                <p>{props.floors} Floors</p>
                <p>{props.openDesk} Open Desks</p>
            </Paper>
        </Aux>
    )
}

export default siteDetails;