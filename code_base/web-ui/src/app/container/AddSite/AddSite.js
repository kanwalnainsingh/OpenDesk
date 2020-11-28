import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Sticky from 'react-sticky-el';

import Aux from '../../HOC/Auxiliary'
import OrganisationService from '../../service/organisation/OrganisationService'
import Site from '../../components/Site/Site'
import Floor from '../../components/Floor/Floor'
import save from '../../../Asset/media/Group66.svg'
import history from '../../../history'
import './AddSite.css'

class addSite extends Component {
    state = {
        siteName: '',
        location: '',
        floorName: '',
        floor: [],
        openDesk: '',
        reservedDesk: '',
        openDeskArray: [],
        id: ''
    }

    onChangeSite = (e) => {
        this.state.siteName = e.target.value
    }

    onChangeLocation = (e) => {
        this.state.location = e.target.value
    }

    fieldBlur = (e, id) => {
        console.log(this.state.floor)
        if (this.state.floor.length > id) {
            this.state.floor[id].name = e.target.value
        }
        else {
            if (e.target.value != '') {
                this.state.floor.push({
                    name: e.target.value
                })
            }
        }
    }

    openDeskBlur = (e, id) => {
        if (this.state.floor.length > id) {
            this.state.floor[id].openDesk = e.target.value
        }
        else {
            if (e.target.value != '') {
                this.state.floor.push({
                    openDesk: e.target.value
                })
            }
        }
    }

    reserveDeskBlur = (e, id) => {
        if (this.state.floor.length > id) {
            this.state.floor[id].reservedDesk = e.target.value
        }
        else {
            if (e.target.value != '') {
                this.state.floor.push({
                    reservedDesk: e.target.value
                })
            }
        }
    }

    clickSubmit = () => {
        let floor = []
        this.state.floor.forEach((f, index) => {
            if(f.name == undefined){
                f.name=''
            }
            if(f.openDesk == undefined){
                f.openDesk=''
            }
            if(f.reservedDesk == undefined){
                f.reservedDesk=''
            }
            floor.push({
                floorId: index.toString(),
                name: f.name,
                openDesk: f.openDesk,
                reservedDesk: f.reservedDesk
            })
        })

        let sitesArray = []
        sitesArray.push({
            name: this.state.siteName,
            location: this.state.location,
            floors: floor
        })


        let request = {
            city: this.state.location,
            sites: sitesArray
        }
        OrganisationService.saveOrganisation(request)
        .then((response)=>{
            this.state.id = response.data.orgId;
        })
        console.log(request)
        // this.state.id = 2;
        history.push({
            pathname: ('/sites/'+ this.state.id)
        })
    }

    render() {
        return (
            <Aux>
                <Site siteInput={(event) => this.onChangeSite(event)} locationInput={(event) => this.onChangeLocation(event)} />
                <Floor
                    onBlurFloor={(event, id) => this.fieldBlur(event, id)}
                    onBlurOpd={(event, id) => this.openDeskBlur(event, id)}
                    onBlurRsD={(event, id) => this.reserveDeskBlur(event, id)}
                />
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