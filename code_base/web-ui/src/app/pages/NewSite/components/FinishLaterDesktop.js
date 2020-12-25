import React, { useContext } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import history from '../../../../../src/history'
import OrganisationService from '../../../service/organisation/OrganisationService'
import { SiteFormContext } from '../state/SiteFormContext';

const useStyles = makeStyles(() => ({
    finishLater: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
    }
}));

export const FinishLaterDesktop = () => {
    const classes = useStyles();
    const { siteNameInput, locationInput, floorInput } = useContext(SiteFormContext);
    const [siteName] = siteNameInput;
    const [location] = locationInput;
    const [floor] = floorInput;

    const clickSubmit = () => {
        let floors = []
        floor.forEach((f, index) => {
            if (f.name == undefined) {
                f.name = ''
            }
            if (f.openDesk == undefined) {
                f.openDesk = ''
            }
            if (f.reservedDesk == undefined) {
                f.reservedDesk = ''
            }
            floors.push({
                floorId: index.toString(),
                name: f.name,
                openDesk: f.openDesk,
                reservedDesk: ''
            })
        })

        let request = {
            orgId: "demo-org",
            id: "demo-id",
            name: siteName,
            location: location,
            floors: floors
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
    }

    return (
        <div className={classes.finishLater}>
            <Button className={classes.button} style={{ marginRight: 32 }}>Delete</Button>
            <Button className={classes.button} >Finish Later?</Button>
            <Button className={classes.button} style={{ marginLeft: 32 }} onClick={clickSubmit}>Save</Button>
        </div>
    )
};