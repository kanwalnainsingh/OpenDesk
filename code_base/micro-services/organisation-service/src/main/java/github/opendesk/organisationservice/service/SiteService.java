package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.converter.OrganisationConverter;
import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.model.Site;
import github.opendesk.organisationservice.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static github.opendesk.organisationservice.converter.OrganisationConverter.*;

@Service
public class SiteService {

    @Autowired
    private SiteRepository siteRepository;

    public Site addSite(Site site) {
        SiteDao siteDao = siteRepository.save(OrganisationConverter.siteModelToSiteDao.apply(site));
        return siteDaoToSiteModel.apply(siteDao);
    }

    public Site getSite(String siteId) {
        return siteDaoToSiteModel.apply(siteRepository.findById(siteId).orElseGet(() -> SiteDao.builder().build()));
    }
}
