import React, { Component } from 'react';

import Aux from '../../HOC/Auxiliary'
import SiteDetails from '../../components/SiteDetails/SiteDetails'
import SiteService from '../../service/Site/SiteService'

//uncomment below line to run from mockdata
//const data = require('../../../Asset/mockData/onboardmock.json')

class sites extends Component {
    state = {
        id: '',
        siteDetails: {}
    }

    componentDidMount() {
        this.state.id = this.props.match.params.id
        SiteService.getSite(this.state.id)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    siteDetails: response.data
                })
                this.countOpenDesk(response.data);
            })
        //uncomment below line to run from mock data
        //this.state.siteDetails = data
    }

    countOpenDesk = (response) => {
        let siteDetailsObj = response
        if (Object.keys(siteDetailsObj).length != 0) {
            siteDetailsObj.sites.forEach((i) => {
                let count = 0
                i.floors.forEach((j) => {
                    count = count + parseInt(j.openDesk)
                })
                let obj = i
                obj["openDesk"] = count
            })
            this.setState({
                siteDetails: siteDetailsObj
            })
        }
    }
    render() {
        console.log(this.state.siteDetails)
        return (
            <Aux>
                {Object.keys(this.state.siteDetails).length != 0 ?
                    <div style={{ display: 'flex' }}>
                        {this.state.siteDetails.sites.map((site, index) =>
                            <SiteDetails
                                key={index}
                                name={site.name}
                                location={site.location}
                                floors={site.floors.length}
                                openDesk={site.openDesk}
                            />
                        )}
                    </div>
                    :
                    <h1>Loading...</h1>
                }
            </Aux>
        )
    }
}

export default sites;