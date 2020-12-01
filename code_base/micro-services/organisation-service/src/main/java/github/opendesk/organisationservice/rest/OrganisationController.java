package github.opendesk.organisationservice.rest;

import github.opendesk.organisationservice.client.BookingClient;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.service.OrganisationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class OrganisationController {

    private final Logger logger = LoggerFactory.getLogger(OrganisationController.class);

    @Autowired
    private OrganisationService organisationService;

    @Autowired
    private BookingClient bookingClient;


    @GetMapping("/organisations")
    public List<Organisation> getOrganisationList() {
        return organisationService.getOrganisations();
    }

    @GetMapping("/organisation/{id}")
    public Organisation getOrganisationById(@PathVariable(value = "id") String id) {
        return organisationService.getOrganisationById(id);
    }

    @GetMapping("/organisation/{orgId}/sites/{siteId}")
    public List getSiteById(@PathVariable(value = "orgId") String orgId,@PathVariable(value = "siteId") String siteId) {
        return organisationService.findByOrgIdAndSiteId(orgId,siteId);
    }

    @PostMapping("/organisation")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Organisation createOrganisation(@RequestBody Organisation organisation) {
        return organisationService.createOrganisation(organisation);
    }
    @PostMapping("/organisation/upload")
    public ResponseEntity<String> uploadOrganisation(@RequestParam("file") MultipartFile organisationLogo, @RequestParam("organisation") String organisation) throws IOException {
        if (organisationLogo.isEmpty()) {
            logger.info("Empty file upload!");
            return new ResponseEntity<>("You must select a file!", HttpStatus.BAD_REQUEST);
        }

        organisationService.uploadSiteDetials(organisationLogo);
        logger.info("file upload Successful!");
        return new ResponseEntity<>("file Uploaded!", HttpStatus.OK);
    }

    @GetMapping("/booking-service/health")
    public String geBookingServiceHealth() {
        return  bookingClient.bookingServiceHealth();
    }


}
