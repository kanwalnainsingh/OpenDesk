package github.opendesk.deskservice.service;

import github.opendesk.deskservice.model.Booking;
import github.opendesk.deskservice.model.Desk;
import github.opendesk.deskservice.model.Organisation;

import java.util.List;

public interface DeskService {
    Desk getDesk(String id);

    Desk addDesk(Desk desk);

    Desk updateDesk(Desk desk);

    void deleteDesk(String deskId);

    List<Desk> getDesks();

    List<Desk> getDesksByOrgIdSiteIdAndFloorId(String orgId, String siteId, String floorId);

    List<Desk> getDesksByOrgIdAndSiteId(String orgId, String siteId);

    List<Desk> getDesksByOrgId(String orgId);

    Desk checkAvailability(List bookings, Booking booking);
    /**
     *
     * @param organisation
     * @return
     */
    List<Desk> persistDesks(Organisation organisation);
}
