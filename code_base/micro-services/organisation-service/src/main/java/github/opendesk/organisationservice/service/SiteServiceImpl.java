package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.converter.OrganisationConverter;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.model.Site;
import github.opendesk.organisationservice.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import static github.opendesk.organisationservice.converter.OrganisationConverter.siteDaoToSiteModel;

@Service
public class SiteServiceImpl implements SiteService{
    @Autowired
    private SiteRepository siteRepository;

    public Site addSite(Site site) {
        // There is no need to add separate handling for Update Site, this function can also be used for update.
        // In DeskService also, there are two function for add and update, but both of them are having same implementation.
        SiteDao siteDao = siteRepository.save(OrganisationConverter.siteModelToSiteDao.apply(site));
        return siteDaoToSiteModel.apply(siteDao);
    }

    public Site getSite(String siteId) {
        return siteDaoToSiteModel.apply(siteRepository.findById(siteId).orElseGet(() -> SiteDao.builder().build()));
    }

    public void deleteSite(String siteId) {
        siteRepository.deleteById(siteId);
    }
}
