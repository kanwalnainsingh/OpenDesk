package github.opendesk.organisationservice.base;

import github.opendesk.organisationservice.dao.FloorDao;
import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.model.Floor;
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
                .sites(getSiteDaoList())
                .build();
    }

    public Organisation getOrganisation() {
        return Organisation.builder()
                .companyName("companyName1")
                .city("city")
                .headQuarters("headQuarters")
                .orgId("orgId")
                .sites(getSiteList())
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
                .id("siteId")
                .orgId("org1")
                .location("loc1")
                .floors(getFloorDaoList()).build();
    }

    public Site getSite() {
        return Site.builder()
                .name("site1")
                .id("siteId")
                .orgId("org1")
                .location("loc1")
                .floors(getFloorList()).build();
    }

    public List<SiteDao> getSiteDaoList() {
        return Arrays.asList(getSiteDao());
    }

    public List<Site> getSiteList() {
        return Arrays.asList(getSite());
    }

    public FloorDao getFloorDao() {
        return FloorDao.builder()
                .name("floor1")
                .floorId("floorId")
                .openDesk("100")
                .reservedDesk("20")
                .build();
    }

    public Floor getFloor() {
        return Floor.builder()
                .name("floor1")
                .floorId("floorId")
                .openDesk("100")
                .reservedDesk("20")
                .build();
    }

    public List<FloorDao> getFloorDaoList() {
        return Arrays.asList(getFloorDao());
    }

    public List<Floor> getFloorList() {
        return Arrays.asList(getFloor());
    }

}
