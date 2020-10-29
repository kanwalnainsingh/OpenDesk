package com.opendesk.rest;

import com.opendesk.dao.SiteRepository;
import com.opendesk.model.CompanyData;
import com.opendesk.model.Site;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
public class SwaggerController {
    @Autowired
    SiteRepository siteRepository;
    CompanyData companyData;

    @GetMapping(value = "/organisation")
    public CompanyData getOrganisationData() {
        return siteRepository.retrieveCompanyData();
    }

    @GetMapping(value = "/organisation/sites/{id}")
    public Site getSitesData(@PathVariable(value = "id") int id) {
        Site site = siteRepository.retrieveSiteData(id);
        return site;
    }

    @PutMapping(value = "/organisation/create")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<String> createOrganisation(
            @ApiParam(value = "Organisation data in JSON format")
            @RequestBody String json) {
        System.out.println(json);
        return ResponseEntity.created(URI.create("/organisation")).build();
    }

    @PostMapping(value = "/organisation/creates")
    @ResponseStatus(code = HttpStatus.CREATED)
    public ResponseEntity<String> createOrganisations(
            @ApiParam(value = "Organisation data in JSON format")
            @RequestBody CompanyData data) {
        System.out.println(data.getHeadQuarters() + "----" + data.getCity());
        //Need to handle List of Sites or Floors
        return ResponseEntity.created(URI.create("/organisation")).build();
    }
}
