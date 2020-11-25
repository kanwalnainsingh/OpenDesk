import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Sticky from 'react-sticky-el';

import Aux from '../../HOC/Auxiliary'
import OrganisationService from '../../service/organisation/OrganisationService'
import Site from '../../components/Site/Site'
import Floor from '../../components/Floor/Floor'
import save from '../../../Asset/media/Group66.svg'
import './AddSite.css'

class addSite extends Component {
    state = {
        siteName: '',
        location: '',
        floorName: '',
        floor: [],
        openDesk: '',
        reservedDesk: '',
        openDeskArray: []
    }

    onChangeSite = (e) => {
        this.setState({ siteName: e.target.value })
    }

    onChangeLocation = (e) => {
        this.setState({ location: e.target.value })
    }

    onChangeFloor = (e) => {
        this.state.floorName = e.target.value
    }

    onChangeOpenDesk = (e) => {
        this.state.openDesk = e.target.value
    }

    onChangeReservedDesk = (e) => {
        this.state.reservedDesk = e.target.value
    }

    createFloorArray = () => {
        this.state.floor.push({
            name: this.state.floorName,
            totalSeat: this.state.openDesk,
            reservedDesk: this.state.reservedDesk
        })
    }

    clickSubmit = () => {
        let floor = []
        this.createFloorArray()
        this.state.floor.forEach((f, index) => {
            floor.push({
                floorId: index.toString(),
                name: f.name,
                totalDesk: f.totalSeat,
                reservedDesk: f.reservedDesk
            })
        })

        let sitesArray =[]
        sitesArray.push({
            name: this.state.siteName,
            location: this.state.location,
            floors: floor
        })

        let request = {
            city: this.state.location,
            sites: sitesArray 
        }
        let result = OrganisationService.saveOrganisation(request);
        console.log(request)
    }
    render() {
        return (
            <Aux>
                <Site siteInput={(event) => this.onChangeSite(event)} locationInput={(event) => this.onChangeLocation(event)} />
                <Floor floorInput={(event) => this.onChangeFloor(event)} createArray={this.createFloorArray} opendeskInput={(event) => this.onChangeOpenDesk(event)}  reservedDeskInput={(event) => this.onChangeReservedDesk(event)}/>
                <Sticky mode='bottom' className="buttons">
                    
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<img src={save} alt="save" />}
                        style={{ marginLeft: '14px', borderRadius: '15px' }}
                        onClick={this.clickSubmit}
                    >
                        Save Site
                </Button>
                    
                </Sticky>
            </Aux>
        )
    }
}

export default addSite;