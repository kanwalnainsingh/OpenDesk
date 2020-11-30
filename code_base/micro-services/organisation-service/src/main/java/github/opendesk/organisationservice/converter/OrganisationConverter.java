package github.opendesk.organisationservice.converter;

import github.opendesk.organisationservice.dao.FloorDao;
import github.opendesk.organisationservice.dao.OrganisationDao;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.model.Floor;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;

import java.util.function.Function;
import java.util.stream.Collectors;

public class OrganisationConverter {

    public static Function<Organisation, OrganisationDao> organisationModelToOrganisationDao = organisation -> {
        OrganisationDao organisationDao = OrganisationDao.builder()
                .companyName(organisation.getCompanyName())
                .city(organisation.getCity())
                .headQuarters(organisation.getHeadQuarters())
                .orgId(organisation.getOrgId())
                .sites(organisation.getSites().stream().map(OrganisationConverter.siteModelToSiteDao::apply).collect(Collectors.toList()))
                .build();
        return organisationDao;
    };

    public static Function<OrganisationDao, Organisation> organisationDaoToOrganisationModel = organisationDao -> {
        Organisation organisation = Organisation.builder()
                .companyName(organisationDao.getCompanyName())
                .city(organisationDao.getCity())
                .headQuarters(organisationDao.getHeadQuarters())
                .orgId(organisationDao.getOrgId())
                .sites(organisationDao.getSites().stream().map(OrganisationConverter.siteDaoToSiteModel::apply).collect(Collectors.toList()))
                .build();
        return organisation;
    };

    public static Function<Site, SiteDao> siteModelToSiteDao = site -> {
        SiteDao siteDao = SiteDao.builder()
                .name(site.getName())
                .id(site.getId())
                .orgId(site.getOrgId())
                .location(site.getLocation())
                .floors(site.getFloors().stream().map(OrganisationConverter.floorModelToFloorDao::apply).collect(Collectors.toList()))
                .build();
        return siteDao;
    };
    public static Function<SiteDao, Site> siteDaoToSiteModel = siteDao -> {
        Site site = Site.builder()
                .name(siteDao.getName())
                .id(siteDao.getId())
                .orgId(siteDao.getOrgId())
                .location(siteDao.getLocation())
                .floors(siteDao.getFloors().stream().map(OrganisationConverter.floorDaoToFloorModel::apply).collect(Collectors.toList())).build();

        return site;
    };
    public static Function<Floor, FloorDao> floorModelToFloorDao = floor -> {
        return FloorDao.builder()
                .name(floor.getName())
                .floorId(floor.getFloorId())
                .openDesk(floor.getOpenDesk())
                .reservedDesk(floor.getReservedDesk())
                .build();
    };
    public static Function<FloorDao, Floor> floorDaoToFloorModel = floorDao -> {
        return Floor.builder()
                .name(floorDao.getName())
                .floorId(floorDao.getFloorId())
                .openDesk(floorDao.getOpenDesk())
                .reservedDesk(floorDao.getReservedDesk())
                .build();
    };
}
