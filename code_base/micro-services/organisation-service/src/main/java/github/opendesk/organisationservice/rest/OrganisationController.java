package github.opendesk.organisationservice.rest;

import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.model.Site;
import github.opendesk.organisationservice.service.OrganisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrganisationController {
    @Autowired
    private OrganisationService organisationService;

    @GetMapping("/organisations")
    public List<Organisation> getOrganisationList() {
        return organisationService.getOrganisations();
    }

    @GetMapping("/organisation/{id}")
    public Organisation getOrganisationById(@PathVariable(value = "id") String id) {
        return organisationService.getOrganisationById(id);
    }

    @GetMapping("/organisation/sites/{id}")
    public Site getSiteById(@PathVariable(value = "id") String id) {
        return organisationService.getSiteByID(id);
    }

    @PostMapping("/organisation")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Organisation createOrganisation(@RequestBody Organisation organisation) {
        return organisationService.createOrganisation(organisation);
    }

    @PostMapping("/organisation/{id}/site")
    public ResponseEntity<String> addSite(@RequestBody Site site, @PathVariable(value = "id") String id) {
        return organisationService.getOrganisationById(id).getCompanyName() != null ?
                new ResponseEntity<>(organisationService.addSite(site).toString(), HttpStatus.OK) :
                new ResponseEntity<>("Create an Organisation first - /organisation", HttpStatus.BAD_REQUEST);
    }
}
