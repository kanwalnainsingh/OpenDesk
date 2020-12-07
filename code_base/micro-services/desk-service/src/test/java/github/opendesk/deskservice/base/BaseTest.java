package github.opendesk.deskservice.base;

import github.opendesk.deskservice.dao.DeskDao;
import github.opendesk.deskservice.model.Desk;
import github.opendesk.deskservice.model.Floor;
import github.opendesk.deskservice.model.Organisation;
import github.opendesk.deskservice.model.Site;

import java.util.Arrays;
import java.util.List;

public class BaseTest {

    public DeskDao getDeskDao() {
        return DeskDao.builder()
                .id("deskId")
                .seatSerial("serial")
                .isReserved("reserved")
                .isAvailable("available")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

    public Desk getDesk() {
        return Desk.builder()
                .id("deskId")
                .seatSerial("serial")
                .isReserved("reserved")
                .isAvailable("available")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

    public List<DeskDao> getDeskDaoList() {
        return Arrays.asList(getDeskDao());
    }

    public List<Desk> getDeskList() {
        return Arrays.asList(getDesk());
    }

    public Organisation getMockOrganisation() {
        return Organisation.builder()
                .orgId("orgId")
                .city("Chennai")
                .companyName("Information Systems")
                .headQuarters("Delhi")
                .sites(Arrays.asList(getMockSite()))
                .build();
    }

    private Site getMockSite() {
        return Site.builder()
                .location("Location")
                .name("Alwarpet")
                .siteId("siteId")
                .floors(Arrays.asList(getMockFloor()))
                .build();
    }

    private Floor getMockFloor() {
        return Floor.builder()
                .floorId("floorId")
                .name("FirstFloor")
                .openDesk("1")
                .reservedDesk("1")
                .build();
    }

    public Desk getMockDesk() {
        return Desk.builder()
                .id("orgIdsiteIdfloorId_OP_1")
                .seatSerial("FirstFloor_OP_1")
                .isReserved("N")
                .isAvailable("A")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

    public DeskDao getMockOpenDeskDaoForPersist() {
        return DeskDao.builder()
                .id("orgIdsiteIdfloorId_OP_1")
                .seatSerial("FirstFloor_OP_1")
                .isReserved("N")
                .isAvailable("A")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

    public DeskDao getMockReservedDeskDaoForPersist() {
        return DeskDao.builder()
                .id("orgIdsiteIdfloorId_RE_1")
                .seatSerial("FirstFloor_RE_1")
                .isReserved("Y")
                .isAvailable("NA")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

    public Desk getMockOpenDeskForPersist() {
        return Desk.builder()
                .id("orgIdsiteIdfloorId_OP_1")
                .seatSerial("FirstFloor_OP_1")
                .isReserved("N")
                .isAvailable("A")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

    public Desk getMockReservedDeskForPersist() {
        return Desk.builder()
                .id("orgIdsiteIdfloorId_RE_1")
                .seatSerial("FirstFloor_RE_1")
                .isReserved("Y")
                .isAvailable("NA")
                .orgId("orgId")
                .siteId("siteId")
                .floorId("floorId")
                .status("status")
                .build();
    }

}
