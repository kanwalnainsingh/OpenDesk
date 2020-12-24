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
    const { siteNameInput, locationInput, floorInput, deskInput } = useContext(SiteFormContext);
    const [siteName] = siteNameInput;
    const [location] = locationInput;
    const [floor] = floorInput;
    const [desk] = deskInput;

    const clickSubmit = () => {

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