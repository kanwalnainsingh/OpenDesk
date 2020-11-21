package github.opendesk.deskservice.base;

import github.opendesk.deskservice.dao.DeskDao;
import github.opendesk.deskservice.model.Desk;

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
}
