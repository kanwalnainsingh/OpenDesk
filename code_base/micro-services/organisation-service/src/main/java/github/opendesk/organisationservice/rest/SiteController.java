package github.opendesk.organisationservice.rest;

import github.opendesk.organisationservice.model.Site;
import github.opendesk.organisationservice.service.SiteService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SiteController {
    private final Logger logger = LoggerFactory.getLogger(SiteController.class);

    @Autowired
    private SiteService siteService;

    @PostMapping("/site")
    public Site addSite(@RequestBody Site site){
        return siteService.addSite(site);
    }
    @GetMapping("/site/{siteId}")
    public Site getSite(@PathVariable String siteId){
        return siteService.getSite(siteId);
    }
}
