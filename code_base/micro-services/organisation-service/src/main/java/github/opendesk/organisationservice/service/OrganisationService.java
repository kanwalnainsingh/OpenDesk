package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.model.Organisation;

import java.util.List;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface OrganisationService {

    Organisation getOrganisationById(String id);


    Organisation createOrganisation(Organisation organisation);


    List<Organisation> getOrganisations();

    List findByOrgIdAndSiteId(String orgId, String siteId);

    void uploadSiteDetials(MultipartFile organisationLogo) throws IOException;
}
