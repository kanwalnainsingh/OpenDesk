package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.model.Site;

public interface SiteService {

    public Site addSite(Site site) ;

    public Site getSite(String siteId) ;

    public void deleteSite(String siteId);
}
