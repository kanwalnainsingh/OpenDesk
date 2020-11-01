package github.opendesk.rest;

import github.opendesk.model.OrganisationModel;
import github.opendesk.model.Site;
import github.opendesk.service.OrganisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrganisationController {
    @Autowired
    private OrganisationService organisationService;

    @GetMapping(value = "/organisation/{id}")
    public OrganisationModel getOrganisationData(@PathVariable(value = "id") String id) {
        return organisationService.getOrganisationData(id);
    }

    @GetMapping(value = "/organisation/sites/{id}")
    public Site getSitesData(@PathVariable(value = "id") String id) {
        return organisationService.getSiteData(id);
    }

    @PostMapping(value = "/organisation/create")
    @ResponseStatus(code = HttpStatus.CREATED)
    public OrganisationModel createOrganisation(@RequestBody OrganisationModel organisationModel) {
        return organisationService.createOrganisation(organisationModel);
    }

    @PutMapping(value = "/organisation/site/add")
    public ResponseEntity<String> addSite(@RequestBody Site site) {
        return getOrganisationData(site.getOrgId()).getOrgId() != null ? new ResponseEntity<>(organisationService.addSite(site).toString(), HttpStatus.OK) : new ResponseEntity<>("Create an Organisation first - /organisation/create", HttpStatus.BAD_REQUEST);
    }
}
