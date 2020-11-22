import React, { Component } from 'react';

import Aux from '../../HOC/Auxiliary'
import Site from '../../components/Site/Site'
import Floor from '../../components/Floor/Floor'

class addSite extends Component {
    render(){
        return(
            <Aux>
                <Site />
                <Floor />
            </Aux>
        )
    }
}

export default addSite;