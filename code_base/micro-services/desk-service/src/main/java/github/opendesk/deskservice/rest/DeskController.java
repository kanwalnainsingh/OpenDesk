package github.opendesk.deskservice.rest;

import github.opendesk.deskservice.model.Desk;
import github.opendesk.deskservice.service.DeskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DeskController {

    @Autowired
    private DeskService deskService;

    @GetMapping("/desks")
    public List getDesks() {
        List listOfDesks = deskService.getDesks();
        return listOfDesks;
    }

    @GetMapping("/desk/{id}")
    public Desk getCountryById(@PathVariable String id) {
        return deskService.getDesk(id);
    }

    @GetMapping("/desks/{orgId}/{siteId}/{floorId}")
    public List getDesksByOrgIdSiteIdAndFloorId (@PathVariable(value = "orgId") String orgId, @PathVariable(value = "siteId") String siteId,@PathVariable(value = "floorId") String floorId) {
        return deskService.getDesksByOrgIdSiteIdAndFloorId(orgId, siteId, floorId);
    }

    @GetMapping("/desks/{orgId}/{siteId}")
    public List getDesksByOrgIdAndSiteId (@PathVariable(value = "orgId") String orgId, @PathVariable(value = "siteId") String siteId) {
        return deskService.getDesksByOrgIdAndSiteId(orgId, siteId);
    }

    @GetMapping("/desks/{orgId}")
    public List getDesksByOrgId (@PathVariable(value = "orgId") String orgId) {
        return deskService.getDesksByOrgId(orgId);
    }

    @PostMapping("/desk")
    @ResponseStatus(HttpStatus.OK)
    public Desk addCountry(@RequestBody Desk Desk) {
        return deskService.addDesk(Desk);
    }

    @PutMapping("/desk")
    public Desk updateCountry(@RequestBody Desk Desk) {
        return deskService.updateDesk(Desk);

    }

    @DeleteMapping("/desk/{id}")
    public void deleteCountry(@PathVariable("id") String DeskId) {
        deskService.deleteDesk(DeskId);
    }

}

