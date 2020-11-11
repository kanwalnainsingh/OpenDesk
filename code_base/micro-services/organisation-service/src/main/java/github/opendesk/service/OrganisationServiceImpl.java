package github.opendesk.service;

import github.opendesk.dao.OrganisationDao;
import github.opendesk.dao.OrganisationRepository;
import github.opendesk.dao.SiteDao;
import github.opendesk.dao.SiteRepository;
import github.opendesk.model.OrganisationModel;
import github.opendesk.model.Site;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static github.opendesk.converter.OrganisationConverter.*;

@Service
public class OrganisationServiceImpl implements OrganisationService {

    private static String UPLOADED_FOLDER = "C:/Users/user/Desktop/OpenDesk/new/";

    @Autowired
    private OrganisationRepository organisationRepository;
    @Autowired
    private SiteRepository siteRepository;

    @Override
    public OrganisationModel getOrganisationData(String id) {
        return organisationDaoToOrganisationModel.apply(organisationRepository.findById(id).orElseGet(() -> OrganisationDao.builder().build()));
    }

    @Override
    public Site getSiteData(String id) {
        return siteDaoToSiteModel.apply(siteRepository.findById(id).orElseGet(() -> SiteDao.builder().build()));
    }

    @Override
    public OrganisationModel createOrganisation(OrganisationModel organisationModel) {
        OrganisationDao organisationDao = organisationRepository.save(organisationModelToOrganisationDao.apply(organisationModel));
        return organisationDaoToOrganisationModel.apply(organisationDao);
    }

    @Override
    public Site addSite(Site site) {
        SiteDao siteDao = siteRepository.save(siteModelToSiteDao.apply(site));
        return siteDaoToSiteModel.apply(siteDao);
    }

    @Override
    public void uploadSiteDetials(MultipartFile uploadfile) throws IOException {
        byte[] bytes = uploadfile.getBytes();
        String str=new String(bytes);
        Path path = Paths.get(UPLOADED_FOLDER + uploadfile.getOriginalFilename());
        Files.write(path, bytes);
    }

}
