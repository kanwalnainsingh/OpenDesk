package github.opendesk.deskservice.converter;

import github.opendesk.deskservice.dao.DeskDao;
import github.opendesk.deskservice.model.Desk;

import java.util.function.Function;

public class DeskConverter {
    public static Function<DeskDao, Desk> deskDaoToDeskModel
            = deskDao -> Desk.builder()
                    .id(deskDao.getId())
                    .seatSerial(deskDao.getSeatSerial())
                    .floorId(deskDao.getFloorId())
                    .isAvailable(deskDao.getIsAvailable())
                    .isReserved(deskDao.getIsReserved())
                    .orgId(deskDao.getOrgId())
                    .siteId(deskDao.getSiteId())
                    .status(deskDao.getStatus())
                    .build();

    public static Function<Desk, DeskDao> deskModelToDeskDao
            = desk -> DeskDao.builder()
                    .floorId(desk.getFloorId())
                    .id(desk.getId())
                    .isAvailable(desk.getIsAvailable())
                    .isReserved(desk.getIsReserved())
                    .orgId(desk.getOrgId())
                    .siteId(desk.getSiteId())
                    .status(desk.getStatus())
                    .seatSerial(desk.getSeatSerial())
                    .build();
}
