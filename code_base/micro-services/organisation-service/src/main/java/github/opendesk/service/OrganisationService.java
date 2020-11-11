package github.opendesk.service;

import github.opendesk.model.OrganisationModel;
import github.opendesk.model.Site;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface OrganisationService {

    OrganisationModel getOrganisationData(String id);

    Site getSiteData(String id);

    OrganisationModel createOrganisation(OrganisationModel organisationModel);

    Site addSite(Site site);

    void uploadSiteDetials(MultipartFile uploadfile) throws IOException;
}
