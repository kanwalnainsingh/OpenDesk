import React, { useContext } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import history from '../../../../../src/history'
import OrganisationService from '../../../service/organisation/OrganisationService'
import { SiteFormContext } from '../state/SiteFormContext';

const useStyles = makeStyles((theme) => ({
    finishLater: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },
    button: {
        color: "white",
        fontWeight: 600,
        fontSize: 14
    }
}));

export const FinishLaterDesktop = () => {
    const classes = useStyles();
    const { siteNameInput, locationInput, floorInput, deskInput } = useContext(SiteFormContext);
    const [siteName] = siteNameInput;
    const [location] = locationInput;
    const [floor] = floorInput;
    const [desk] = deskInput;

    const clickSubmit = () => {
        // let floor = []
        // this.state.floor.forEach((f, index) => {
        //     if (f.name == undefined) {
        //         f.name = ''
        //     }
        //     if (f.reservedDesk == undefined) {
        //         f.reservedDesk = ''
        //     }
        //     floor.push({
        //         floorId: index.toString(),
        //         name: f.name,
        //         desks: f.desks,
        //     })
        // })

        let sitesArray = []
        sitesArray.push({
            name: siteName,
            location: location,
            floors: floor
        })

        let request = {
            orgId: "demo-org",
            companyName: "Demo Corp Limited",
            city: location,
            sites: sitesArray
        }
        OrganisationService.saveOrganisation(request)
            .then((response) => {
                console.log(response.data)
                let id = response.data.orgId;
                history.push({
                    pathname: ('/sites/' + id)
                })
            })
        console.log(request)
        // this.state.id = 2;
    }

    return (
        <div className={classes.finishLater}>
            <Button className={classes.button} style={{ marginRight: 32 }}>Delete</Button>
            <Button className={classes.button} >Finish Later?</Button>
            <Button className={classes.button} style={{ marginLeft: 32 }} onClick={clickSubmit}>Save</Button>
        </div>
    )
};