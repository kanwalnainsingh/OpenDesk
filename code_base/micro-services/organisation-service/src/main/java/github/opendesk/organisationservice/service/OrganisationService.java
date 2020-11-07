package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;

import java.util.List;

public interface OrganisationService {

    Organisation getOrganisationById(String id);


    Organisation createOrganisation(Organisation organisation);


    List<Organisation> getOrganisations();

    List findByOrgIdAndSiteId(String orgId, String siteId);
}
