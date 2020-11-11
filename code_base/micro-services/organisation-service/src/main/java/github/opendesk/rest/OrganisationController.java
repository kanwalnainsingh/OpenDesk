package github.opendesk.rest;



import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import github.opendesk.model.OrganisationModel;
import github.opendesk.model.Site;
import github.opendesk.service.OrganisationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class OrganisationController {


    private final Logger logger = LoggerFactory.getLogger(OrganisationController.class);

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
        logger.info("OrganisationModel Created");

        return organisationService.createOrganisation(organisationModel);
    }

    @PutMapping(value = "/organisation/site/add")
    public ResponseEntity<String> addSite(@RequestBody Site site) {
        return getOrganisationData(site.getOrgId()).getOrgId() != null ? new ResponseEntity<>(organisationService.addSite(site).toString(), HttpStatus.OK) : new ResponseEntity<>("Create an Organisation first - /organisation/create", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/organisation/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile uploadfile) throws IOException {
        if (uploadfile.isEmpty()) {
            logger.info("Empty file upload!");
            return new ResponseEntity<>("You must select a file!", HttpStatus.BAD_REQUEST);
        }

        organisationService.uploadSiteDetials(uploadfile);
        logger.info("file upload Successful!");
        return new ResponseEntity<>("file Uploaded!", HttpStatus.OK);
    }
}
