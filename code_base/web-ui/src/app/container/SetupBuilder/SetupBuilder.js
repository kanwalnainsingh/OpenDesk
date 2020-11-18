import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import Aux from '../../HOC/Auxiliary'
import './SetupBuilder.css'
import Floor from '../../components/Onboarding/Floor'
import Service from '../../../services'

var onboardData = require('../../../Asset/mockData/onboardmock.json')

class setUpBuilder extends Component {
    state = {
        fileName: '',
        floorCount: 0,
        cardsCount: 0,
        floorPlan: '',
        name: '',
        location: ''
    }

    clickUploadHanler = () => {
        document.getElementById('uploadFile').click()
    }

    uploadFloorPlanHandler = (idToUpload) => {
        document.getElementById(idToUpload).click()
    }

    afterUpload = (event) => {
        let file = event.target.files[0].name

        this.setState({
            fileName: file,
        })
    }

    afterPlanUpload = (event) => {
        let floorPlanName = event.target.files[0].name

        this.setState({
            floorPlan: floorPlanName
        })
    }

    addFloorHandler = () => {
        this.setState(prevState => {
            return { floorCount: prevState.floorCount + 1 };
        });
    };

    addSiteHandler = () => {
        this.setState(prevState => {
            return { cardsCount: prevState.cardsCount + 1 };
        });
    };

    getFloor = () => {
        let floor = [];
        for (let i = 0; i < this.state.floorCount; i++) {
            let id = ("uploadFloorPlan" + i)
            floor.push(<Floor inputId={id} iconClick={(idToUpload) => this.uploadFloorPlanHandler(idToUpload)} displayValue={this.state.floorPlan} afterFileUpload={this.afterPlanUpload} />)
        }
        return floor;
    }

    getCard = () => {
        const siteJsx = (<Paper elevation={3} className="sitePaper" style={{ marginTop: '2%' }}>
            <h5 className="paperHead">Site Details</h5>
            <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '93%' }} label="Site Name" />
            <p style={{ marginTop: '16px' }}>Floor Details</p>
            <Floor inputId={"uploadFloorPlan"} iconClick={(idToUpload) => this.uploadFloorPlanHandler(idToUpload)} displayValue={this.state.floorPlan} afterFileUpload={this.afterPlanUpload} />
            <div>{this.getFloor()}</div>
            <Chip
                icon={<AddOutlinedIcon />}
                label="Add Floor"
                onClick={this.addFloorHandler}
                variant="outlined"
                style={{ marginTop: '1% ' }}
                color="primary"
            />
        </Paper>)
        let card = [];
        for (let i = 0; i < this.state.cardsCount; i++) {
            card.push(siteJsx)
        }
        return card;
    }

    addInput = (e, value) => {
        switch (value) {
            case 'name':
                this.setState({
                    name: e.target.value
                })
            case 'location':
                this.setState({
                    location: e.target.value
                })
        }
    }

    submitForm = () => {
        console.log(onboardData)
        Service.saveOnboardData(onboardData)
            .then(response => console.log(response.data))
    }

    render() {
        return (
            <Aux>
                <Paper elevation={3} style={{ width: '50%', padding: '20px', display: 'flex' }}>
                    <div className="logo" onClick={this.clickUploadHanler}>
                        <input type="file" hidden id="uploadFile" onChange={this.afterUpload} />
                        {this.state.fileName != '' ? <a>{this.state.fileName}</a> : <a>Choose a Logo</a>}
                    </div>
                    <div style={{ marginLeft: '5%', width: '100%' }}>
                        <TextField id="standard-basic" label="Name" style={{ width: '100%' }} onChange={(event, value) => this.addInput(event, "name")} />
                        <div style={{ marginTop: '15px' }}>
                            <TextField id="standard-basic" label="Location" multiline rowsMax={2} style={{ width: '100%' }} onChange={(event, value) => this.addInput(event, "location")} />
                        </div>
                    </div>
                </Paper>
                <div style={{ marginTop: '30px' }}>
                    <Paper elevation={3} className="sitePaper">
                        <h5 className="paperHead">Site Details</h5>
                        <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '93%' }} label="Site Name" />
                        <p style={{ marginTop: '16px' }}>Floor Details</p>
                        <Floor inputId={"uploadFloorPlan"} iconClick={(idToUpload) => this.uploadFloorPlanHandler(idToUpload)} displayValue={this.state.floorPlan} afterFileUpload={this.afterPlanUpload} />
                        <div>{this.getFloor()}</div>
                        <Chip
                            icon={<AddOutlinedIcon />}
                            label="Add Floor"
                            onClick={this.addFloorHandler}
                            variant="outlined"
                            style={{ marginTop: '1% ' }}
                            color="primary"
                        />
                    </Paper>
                </div>
                <div>{this.getCard()}</div>
                <Chip
                    icon={<AddOutlinedIcon />}
                    label="Add Site"
                    onClick={this.addSiteHandler}
                    variant="outlined"
                    style={{ marginTop: '1% ' }}
                    color="primary"
                />
                <Button variant="contained" color="primary" style={{ marginTop: '1%', marginLeft: '78%' }} onClick={this.submitForm}>
                    Submit
                </Button>
            </Aux>
        )
    }
}

export default setUpBuilder;