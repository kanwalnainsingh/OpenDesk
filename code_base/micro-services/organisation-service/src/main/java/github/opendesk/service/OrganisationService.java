package github.opendesk.service;

import github.opendesk.model.OrganisationModel;
import github.opendesk.model.Site;

public interface OrganisationService {

    OrganisationModel getOrganisationData(String id);

    Site getSiteData(String id);

    OrganisationModel createOrganisation(OrganisationModel organisationModel);

    Site addSite(Site site);
}
