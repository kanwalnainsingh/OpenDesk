import React from 'react'
import './OrganisationHeader.css'

const OrganisationHeader = () => {
    return (
        <React.Fragment>
            <div className="container my_d">
                <i className="fa fa-4x" id="d">d</i>
                <p className="h5 bg-my text-info" id="desk">Open Desk</p>
                <p className="h6 open_desk bg-my text-center d-inline-flex text-info">Organization Onboarding</p>
            </div>
        </React.Fragment>
    )
}

export default OrganisationHeader;
