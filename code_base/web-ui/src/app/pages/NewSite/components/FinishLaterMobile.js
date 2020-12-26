import React, { useContext } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import OrganisationService from '../../../service/organisation/OrganisationService'
import history from '../../../../../src/history'
import { SiteFormContext } from '../state/SiteFormContext';

const useStyles = makeStyles(() => ({
    finishLater: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
    }
}));

export const FinishLaterMobile = () => {
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
            <IconButton aria-label="delete">
                <DeleteIcon style={{ fill: "white" }} />
            </IconButton>
            <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                Finish Later?
            </Typography>
            <IconButton
                aria-label="done"
                onClick={clickSubmit}>
                <CheckIcon style={{ fill: "white" }} />
            </IconButton>
        </div>
    )
};