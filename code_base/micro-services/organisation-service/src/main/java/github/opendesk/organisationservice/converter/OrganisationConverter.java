package github.opendesk.organisationservice.converter;

import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;

import java.util.function.Function;

public class OrganisationConverter {

    public static Function<Organisation, OrganisationDao> organisationModelToOrganisationDao = organisation -> {
        OrganisationDao organisationDao = OrganisationDao.builder()
                .companyName(organisation.getCompanyName())
                .city(organisation.getCity())
                .headQuarters(organisation.getHeadQuarters())
                .orgId(organisation.getOrgId())
                .build();
        return organisationDao;
    };

    public static Function<OrganisationDao, Organisation> organisationDaoToOrganisationModel = organisationDao -> {
        Organisation organisation = Organisation.builder()
                .companyName(organisationDao.getCompanyName())
                .city(organisationDao.getCity())
                .headQuarters(organisationDao.getHeadQuarters())
                .orgId(organisationDao.getOrgId())
                .build();
        return organisation;
    };

    public static Function<Site, SiteDao> siteModelToSiteDao = site -> {
        SiteDao siteDao = SiteDao.builder()
                .name(site.getName())
                .siteId(site.getSiteId())
                .orgId(site.getOrgId())
                .build();
        return siteDao;
    };
    public static Function<SiteDao, Site> siteDaoToSiteModel = siteDao -> {
        Site site = Site.builder()
                .name(siteDao.getName())
                .orgId(siteDao.getOrgId())
                .siteId(siteDao.getSiteId()).build();
        return site;
    };
}
