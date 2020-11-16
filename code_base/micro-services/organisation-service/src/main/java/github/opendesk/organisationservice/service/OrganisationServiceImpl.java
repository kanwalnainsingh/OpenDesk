package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.converter.OrganisationConverter;
import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.OrganisationRepository;
import github.opendesk.organisationservice.model.Organisation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.web.multipart.MultipartFile;

import static github.opendesk.organisationservice.converter.OrganisationConverter.organisationDaoToOrganisationModel;

@Service
public class OrganisationServiceImpl implements OrganisationService {

    private static final String UPLOADED_FOLDER = "./src/main/resources/organisationLogo/";
    @Autowired
    private OrganisationRepository organisationRepository;

    @Override
    public Organisation getOrganisationById(String id) {
        return organisationDaoToOrganisationModel.apply(organisationRepository.findById(id).orElseGet(() -> OrganisationDao.builder().build()));
    }


    @Override
    public Organisation createOrganisation(Organisation organisation) {
        OrganisationDao organisationDao = organisationRepository.save(OrganisationConverter.organisationModelToOrganisationDao.apply(organisation));
        return organisationDaoToOrganisationModel.apply(organisationDao);
    }


    @Override
    public List<Organisation> getOrganisations() {
        List<OrganisationDao> organisationList = new ArrayList<>();
        organisationRepository.findAll().forEach(organisationList::add);
        return organisationList.stream().map(organisationDaoToOrganisationModel::apply).collect(Collectors.toList());
    }


    @Override
    public List findByOrgIdAndSiteId(String orgId, String siteId) {
        return organisationRepository.findByOrgIdAndSitesId(orgId,siteId);
    }

    @Override
    public void uploadSiteDetials(MultipartFile organisationLogo) throws IOException {
        byte[] bytes = organisationLogo.getBytes();
        String str=new String(bytes);
        Path path = Paths.get(UPLOADED_FOLDER + organisationLogo.getOriginalFilename());
        System.out.println("Path: " + path.toString());
        Files.write(path, bytes);
    }

}
