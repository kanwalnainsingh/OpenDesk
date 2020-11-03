package github.opendesk.organisationservice.base;

import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;

import java.util.Arrays;
import java.util.List;

public class BaseTest {

    public OrganisationDao getOrganisationDao() {
        return OrganisationDao.builder()
                .companyName("companyName1")
                .city("city")
                .headQuarters("headQuarters")
                .orgId("orgId")
                .build();
    }

    public Organisation getOrganisation() {
        return Organisation.builder()
                .companyName("companyName1")
                .city("city")
                .headQuarters("headQuarters")
                .orgId("orgId")
                .build();
    }

    public List<OrganisationDao> getOrganisationDaoList() {
        return Arrays.asList(getOrganisationDao());
    }

    public List<Organisation> getOrganisationList() {
        return Arrays.asList(getOrganisation());
    }

    public SiteDao getSiteDao() {
        return SiteDao.builder()
                .name("site1")
                .orgId("orgId")
                .siteId("siteId").build();
    }

    public Site getSite() {
        return Site.builder()
                .name("site1")
                .orgId("orgId")
                .siteId("siteId").build();
    }
}
