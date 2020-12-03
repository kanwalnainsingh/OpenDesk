package github.opendesk.organisationservice.service;

import com.google.gson.Gson;
import github.opendesk.organisationservice.converter.OrganisationConverter;
import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.repository.OrganisationRepository;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.rest.OrganisationController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.core.env.Environment;
import org.springframework.core.env.Profiles;
import org.springframework.kafka.core.KafkaTemplate;
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

    private final Logger logger = LoggerFactory.getLogger(OrganisationServiceImpl.class);
    private static final String UPLOADED_FOLDER = "./src/main/resources/organisationLogo/";

    @Autowired
    private Gson gson;

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    private OrganisationRepository organisationRepository;

    @Autowired
    Environment env;

    @Override
    public Organisation getOrganisationById(String id) {
        return organisationDaoToOrganisationModel.apply(organisationRepository.findById(id).orElseGet(() -> OrganisationDao.builder().build()));
    }


    @Override
    public Organisation createOrganisation(Organisation organisation) {
        OrganisationDao organisationDao = organisationRepository.save(OrganisationConverter.organisationModelToOrganisationDao.apply(organisation));
        if (env.acceptsProfiles(Profiles.of("local"))) {
            sendDataToKafka(organisation);
        }
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

    private void sendDataToKafka(Organisation organisation) {
        String organizationDetails=gson.toJson(organisation);
        String topicName=env.getProperty("spring.kafka.producer.topic");
        logger.info("topic Name: "+topicName);
        logger.info("organization Details : "+ organizationDetails);
        kafkaTemplate.send(topicName, organizationDetails);
    }
}
