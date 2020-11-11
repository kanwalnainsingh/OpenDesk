import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import BackupTwoToneIcon from '@material-ui/icons/BackupTwoTone';
import Chip from '@material-ui/core/Chip';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

import Aux from '../../HOC/Auxiliary'
import './SetupBuilder.css'

class setUpBuilder extends Component {
    state = {
        fileName: '',
        floorCount: 0,
        cardsCount: 0,
        floorPlan: '',
    }

    clickUploadHanler = () => {
        document.getElementById('uploadFile').click()
    }

    uploadFloorPlanHandler = () => {
        document.getElementById('uploadFloorPlan').click()
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
        const floorJsx = (<div style={{ display: 'flex', marginTop: '2%' }}>
            <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '20%' }} label="Floor" />
            <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Total Desk" type="number" />
            <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%', backgroundColor: 'rgb(176,224,230)', borderRadius: '5px' }} label="Open Desk" type="number" />
            <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Reserved" type="number" />
            <input type="file" hidden id="uploadFloorPlan" onChange={this.afterPlanUpload} />
            <FormControl variant="filled" style={{ marginLeft: '2%', width: '20%' }}>
                <InputLabel htmlFor="filled-adornment-password">Desk Plan</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    style={{ height: '60px' }}
                    value={this.state.floorPlan}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={this.uploadFloorPlanHandler}
                                edge="end"
                            >
                                <BackupTwoToneIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>)
        let floor = [];
        for (let i = 0; i < this.state.floorCount; i++) {
            floor.push(floorJsx)
        }
        return floor;
    }

    getCard = () => {
        const siteJsx = (<Paper elevation={3} className="sitePaper" style={{ marginTop: '2%' }}>
            <h5 className="paperHead">Site Details</h5>
            <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '93%' }} label="Site Name" />
            <p style={{ marginTop: '16px' }}>Floor Details</p>
            <div style={{ display: 'flex' }}>
                <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '20%' }} label="Floor" />
                <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Total Desk" type="number" />
                <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%', backgroundColor: 'rgb(176,224,230)', borderRadius: '5px' }} label="Open Desk" type="number" />
                <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Reserved" type="number" />
                <input type="file" hidden id="uploadFloorPlan" onChange={this.afterPlanUpload} />
                <FormControl variant="filled" style={{ marginLeft: '2%', width: '20%' }}>
                    <InputLabel htmlFor="filled-adornment-password">Desk Plan</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        style={{ height: '60px' }}
                        value={this.state.floorPlan}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={this.uploadFloorPlanHandler}
                                    edge="end"
                                >
                                    <BackupTwoToneIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
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

    render() {
        return (
            <Aux>
                <Paper elevation={3} style={{ width: '50%', padding: '20px', display: 'flex' }}>
                    <div className="logo" onClick={this.clickUploadHanler}>
                        <input type="file" hidden id="uploadFile" onChange={this.afterUpload} />
                        {this.state.fileName != '' ? <a>{this.state.fileName}</a> : <a>Choose a Logo</a>}
                    </div>
                    <div style={{ marginLeft: '5%', width: '100%' }}>
                        <TextField id="standard-basic" label="Name" style={{ width: '100%' }} />
                        <div style={{ marginTop: '15px' }}>
                            <TextField id="standard-basic" label="Location" multiline rowsMax={2} style={{ width: '100%' }} />
                        </div>
                    </div>
                </Paper>
                <div style={{ marginTop: '30px' }}>
                    <Paper elevation={3} className="sitePaper">
                        <h5 className="paperHead">Site Details</h5>
                        <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '93%' }} label="Site Name" />
                        <p style={{ marginTop: '16px' }}>Floor Details</p>
                        <div style={{ display: 'flex' }}>
                            <TextField id="filled-basic" InputProps={{ disableUnderline: true }} variant="filled" style={{ width: '20%' }} label="Floor" />
                            <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Total Desk" type="number" />
                            <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%', backgroundColor: 'rgb(176,224,230)', borderRadius: '5px' }} label="Open Desk" type="number" />
                            <TextField id="filled-basic" InputProps={{ shrink: true, disableUnderline: true }} variant="filled" style={{ width: '15%', marginLeft: '2%' }} label="Reserved" type="number" />
                            <input type="file" hidden id="uploadFloorPlan" onChange={this.afterPlanUpload} />
                            <FormControl variant="filled" style={{ marginLeft: '2%', width: '20%' }}>
                                <InputLabel htmlFor="filled-adornment-password">Desk Plan</InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                    style={{ height: '60px' }}
                                    value={this.state.floorPlan}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={this.uploadFloorPlanHandler}
                                                edge="end"
                                            >
                                                <BackupTwoToneIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
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
                <Button variant="contained" color="primary" style={{ marginTop: '1%', marginLeft: '78%' }}>
                    Submit
                </Button>
            </Aux>
        )
    }
}

export default setUpBuilder;