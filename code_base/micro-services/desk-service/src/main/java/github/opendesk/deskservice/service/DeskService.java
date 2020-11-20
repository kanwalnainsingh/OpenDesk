package github.opendesk.deskservice.service;

import github.opendesk.deskservice.model.Desk;

import java.util.List;

public interface DeskService {
    Desk getDesk(String id);

    Desk addDesk(Desk desk);

    Desk updateDesk(Desk desk);

    void deleteDesk(String deskId);

    List getDesks();

    List getDesksByOragIdSiteIdAndFloorId(String orgId, String siteId, String floorId);
}
