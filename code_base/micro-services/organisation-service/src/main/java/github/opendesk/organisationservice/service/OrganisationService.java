package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;

import java.util.List;

public interface OrganisationService {

    Organisation getOrganisationById(String id);

    Site getSiteByID(String id);

    Organisation createOrganisation(Organisation organisation);

    Site addSite(Site site);

    List<Organisation> getOrganisations();
}
