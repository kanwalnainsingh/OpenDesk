package github.opendesk.deskservice.service;

import github.opendesk.deskservice.converter.DeskConverter;
import github.opendesk.deskservice.dao.DeskDao;
import github.opendesk.deskservice.model.Booking;
import github.opendesk.deskservice.model.Floor;
import github.opendesk.deskservice.model.Organisation;
import github.opendesk.deskservice.model.Site;
import github.opendesk.deskservice.repository.DeskRepository;
import github.opendesk.deskservice.model.Desk;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


@Service
public class DeskServiceImpl implements DeskService {

    @Autowired
    private DeskRepository deskRepository;

    @Override
    public List<Desk> getDesks() {
        List<DeskDao> deskDaoList = new ArrayList<DeskDao>();
        deskRepository.findAll().forEach(deskDaoList::add);
        return deskDaoList.stream().map(DeskConverter.deskDaoToDeskModel).collect(Collectors.toList());
    }

    @Override
    public Desk getDesk(String id) {
        return DeskConverter.deskDaoToDeskModel.apply(deskRepository.findById(id).orElseGet(() -> DeskDao.builder().build()));
    }

    @Override
    public Desk addDesk(Desk desk) {
        DeskDao bookingDao = deskRepository.save(DeskConverter.deskModelToDeskDao.apply(desk));
        return DeskConverter.deskDaoToDeskModel.apply(bookingDao);
    }

    @Override
    public Desk updateDesk(Desk desk) {
        DeskDao bookingDao = deskRepository.save(DeskConverter.deskModelToDeskDao.apply(desk));
        return DeskConverter.deskDaoToDeskModel.apply(bookingDao);
    }

    @Override
    public void deleteDesk(String id) {
        deskRepository.deleteById(id);
    }

    @Override
    public List<Desk> getDesksByOrgIdSiteIdAndFloorId(String orgId, String siteId, String floorId) {
        List<DeskDao> deskDaoList = deskRepository.findByOrgIdAndSiteIdAndFloorId(orgId, siteId, floorId);
        return deskDaoList.stream().map(DeskConverter.deskDaoToDeskModel).collect(Collectors.toList());
    }

    @Override
    public List<Desk> getDesksByOrgIdAndSiteId(String orgId, String siteId) {
        List<DeskDao> deskDaoList = deskRepository.findByOrgIdAndSiteId(orgId, siteId);
        return deskDaoList.stream().map(DeskConverter.deskDaoToDeskModel).collect(Collectors.toList());
    }

    @Override
    public List<Desk> getDesksByOrgId(String orgId) {
        List<DeskDao> deskDaoList = deskRepository.findByOrgId(orgId);
        return deskDaoList.stream().map(DeskConverter.deskDaoToDeskModel).collect(Collectors.toList());
    }

    @Override
    public Desk checkAvailability(List bookings, Booking booking) {
        List bookingList = (List) bookings
                .stream()
                .filter(b -> b.equals(booking))
                .collect(Collectors.toList());

        List<Desk> desks = getDesksByOrgIdSiteIdAndFloorId(booking.getOrgId(), booking.getSiteId(), booking.getFloorId());

        List availableDesks = new ArrayList<>();

        for (Booking b : (List<Booking>) bookingList) {
            for (Desk d : desks) {
                if (!(b.getDeskId().equals(d.getId()))) {
                    availableDesks.add(d);
                }

            }
        }
        if (availableDesks.isEmpty()) {
            return null;
        } else {
            return (Desk) availableDesks.get(0);
        }
    }
    /**
     * @param organisation
     * @return
     */
    @Override
    public List<Desk> persistDesks(Organisation organisation) {
        List<Desk> persistedDesks = new ArrayList<>();
        if (!CollectionUtils.isEmpty(organisation.getSites())) {
            Site site = organisation.getSites().get(0);
            site.getFloors().forEach(floor -> {
                List<DeskDao> openDeskDaos = generateDeskObjectsToPersist(organisation.getOrgId(), site.getSiteId(), floor, true);
                if (!CollectionUtils.isEmpty(openDeskDaos)) {
                    persistedDesks.addAll(iteratorToList(deskRepository.saveAll(openDeskDaos)));
                }
                List<DeskDao> reservedDeskDaos = generateDeskObjectsToPersist(organisation.getOrgId(), site.getSiteId(), floor, false);
                if (!CollectionUtils.isEmpty(reservedDeskDaos)) {
                    persistedDesks.addAll(iteratorToList(deskRepository.saveAll(reservedDeskDaos)));
                }
            });
        }
        return persistedDesks;
    }

    /**
     * @param orgId
     * @param siteId
     * @param floor
     * @param isOpenDesk
     * @return
     */
    private List<DeskDao> generateDeskObjectsToPersist(String orgId, String siteId, Floor floor, boolean isOpenDesk) {
        List<DeskDao> persistDesks = new ArrayList<>();
        IntStream.rangeClosed(1, isOpenDesk ? Integer.parseInt(floor.getOpenDesk()) :
                Integer.parseInt(floor.getReservedDesk())).forEach(deskNo -> {
            persistDesks.add(DeskDao.builder()
                    .id(orgId + siteId + floor.getFloorId() + (isOpenDesk ? "_OP" : "_RE") + "_" + deskNo)
                    .seatSerial(floor.getName() + (isOpenDesk ? "_OP" : "_RE") + "_" + deskNo)
                    .isReserved(isOpenDesk ? "N" : "Y")
                    .isAvailable(isOpenDesk ? "A" : "NA")
                    .orgId(orgId)
                    .siteId(siteId)
                    .floorId(floor.getFloorId())
                    .status("status")
                    .build());
        });
        return persistDesks;
    }

    /**
     * @param items
     * @return
     */
    private List<Desk> iteratorToList(Iterable<DeskDao> items) {
        List<Desk> modelDesks = new ArrayList<Desk>();
        items.forEach(item -> modelDesks.add(DeskConverter.deskDaoToDeskModel.apply(item)));
        return modelDesks;
    }
}

