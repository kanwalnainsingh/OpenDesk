import React from 'react';

import Container from '@material-ui/core/Container';

import Aux from '../../HOC/Auxiliary'
import './Layout.css'

const Layout = () => {
    return (
        <Aux classes="layout">
            <h3 className="icon">d</h3>
            <a style={{ paddingTop: '.5%', paddingLeft: '.5%', fontWeight: 'bold' }}>Open Desk</a>
            <h5 style={{ paddingLeft: '35%', paddingTop: '.5%', fontWeight: 'bolder', color: 'rgb(13, 13, 196)' }}>Organization Onboarding</h5>
        </Aux>
    )
}

export default Layout;