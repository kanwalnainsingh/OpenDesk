package github.opendesk.converter;

import github.opendesk.dao.OrganisationDao;
import github.opendesk.dao.SiteDao;
import github.opendesk.model.OrganisationModel;
import github.opendesk.model.Site;

import java.util.function.Function;

public class OrganisationConverter {

    public static Function<OrganisationModel, OrganisationDao> organisationModelToOrganisationDao = organisationModel -> {
        OrganisationDao organisationDao = OrganisationDao.builder()
                .companyName(organisationModel.getCompanyName())
                .city(organisationModel.getCity())
                .headQuarters(organisationModel.getHeadQuarters())
                .orgId(organisationModel.getOrgId())
                .build();
        return organisationDao;
    };

    public static Function<OrganisationDao, OrganisationModel> organisationDaoToOrganisationModel = organisationDao -> {
        OrganisationModel organisationModel = OrganisationModel.builder()
                .companyName(organisationDao.getCompanyName())
                .city(organisationDao.getCity())
                .headQuarters(organisationDao.getHeadQuarters())
                .orgId(organisationDao.getOrgId())
                .build();
        return organisationModel;
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
