package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.converter.OrganisationConverter;
import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.OrganisationRepository;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.dao.SiteRepository;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static github.opendesk.organisationservice.converter.OrganisationConverter.organisationDaoToOrganisationModel;

@Service
public class OrganisationServiceImpl implements OrganisationService {
    @Autowired
    private OrganisationRepository organisationRepository;
    @Autowired
    private SiteRepository siteRepository;

    @Override
    public Organisation getOrganisationById(String id) {
        return organisationDaoToOrganisationModel.apply(organisationRepository.findById(id).orElseGet(() -> OrganisationDao.builder().build()));
    }

    @Override
    public Site getSiteByID(String id) {
        return OrganisationConverter.siteDaoToSiteModel.apply(siteRepository.findById(id).orElseGet(() -> SiteDao.builder().build()));
    }

    @Override
    public Organisation createOrganisation(Organisation organisation) {
        OrganisationDao organisationDao = organisationRepository.save(OrganisationConverter.organisationModelToOrganisationDao.apply(organisation));
        return organisationDaoToOrganisationModel.apply(organisationDao);
    }

    @Override
    public Site addSite(Site site) {
        SiteDao siteDao = siteRepository.save(OrganisationConverter.siteModelToSiteDao.apply(site));
        return OrganisationConverter.siteDaoToSiteModel.apply(siteDao);
    }

    @Override
    public List<Organisation> getOrganisations() {
        List<OrganisationDao> organisationList = new ArrayList<>();
        organisationRepository.findAll().forEach(organisationList::add);
        return organisationList.stream().map(organisationDaoToOrganisationModel::apply).collect(Collectors.toList());
    }

}
