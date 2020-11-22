import React from 'react';

import Aux from '../../HOC/Auxiliary'
import SiteName from './SiteDetails/SiteName/SiteName'
import Location from './SiteDetails/Location/Location'
import './Site.css'

const site = (props) => {
    return (
        <Aux>
            <h3 className="addSite">ADD SITE</h3>
            <div style={{display: 'flex'}}>
                <SiteName />
                <Location />
            </div>
        </Aux>
    )
}

export default site;