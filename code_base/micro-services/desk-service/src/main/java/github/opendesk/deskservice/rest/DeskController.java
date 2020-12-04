package github.opendesk.deskservice.rest;

import github.opendesk.deskservice.model.Desk;
import github.opendesk.deskservice.model.Organisation;
import github.opendesk.deskservice.service.DeskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DeskController {

    @Autowired
    private DeskService deskService;

    @GetMapping("/desks")
    public List<Desk> getDesks() {
        List<Desk> listOfDesks = deskService.getDesks();
        return listOfDesks;
    }

    @GetMapping("/desk/{id}")
    public Desk getCountryById(@PathVariable String id) {
        return deskService.getDesk(id);
    }

    @GetMapping("/desks/{orgId}/{siteId}/{floorId}")
    @Operation(responses = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "204", description = "No Content")
    }
    )
    public ResponseEntity<List<Desk>> getDesksByOrgIdSiteIdAndFloorId(@PathVariable(value = "orgId") String orgId, @PathVariable(value = "siteId") String siteId, @PathVariable(value = "floorId") String floorId) {
        List<Desk> desks = deskService.getDesksByOrgIdSiteIdAndFloorId(orgId, siteId, floorId);
        ResponseEntity.BodyBuilder responseEntityBuilder = buildResponseEntity(desks);
        return responseEntityBuilder.body(desks);
    }

    @GetMapping("/desks/{orgId}/{siteId}")
    @Operation(responses = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "204", description = "No Content")
    }
    )
    public ResponseEntity<List<Desk>> getDesksByOrgIdAndSiteId(@PathVariable(value = "orgId") String orgId, @PathVariable(value = "siteId") String siteId) {
        List<Desk> desks = deskService.getDesksByOrgIdAndSiteId(orgId, siteId);
        ResponseEntity.BodyBuilder responseEntityBuilder = buildResponseEntity(desks);
        return responseEntityBuilder.body(desks);
    }

    @GetMapping("/desks/{orgId}")
    @Operation(responses = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "204", description = "No Content")
    }
    )
    public ResponseEntity<List<Desk>> getDesksByOrgId(@PathVariable(value = "orgId") String orgId) {
        List<Desk> desks = deskService.getDesksByOrgId(orgId);
        ResponseEntity.BodyBuilder responseEntityBuilder = buildResponseEntity(desks);
        return responseEntityBuilder.body(desks);
    }

    @PostMapping("/desk")
    @ResponseStatus(HttpStatus.CREATED)
    public Desk addDesk(@RequestBody Desk Desk) {
        return deskService.addDesk(Desk);
    }

    @PostMapping("/desks")
    @Operation(responses = {
            @ApiResponse(responseCode = "200", description = "OK"),
            @ApiResponse(responseCode = "204", description = "No Content")
    }
    )
    public ResponseEntity<List<Desk>> persistDesks(@RequestBody Organisation organisation) {
        List<Desk> desks = deskService.persistDesks(organisation);
        ResponseEntity.BodyBuilder responseEntityBuilder = buildResponseEntity(desks);
        return responseEntityBuilder.body(desks);
    }

    @PutMapping("/desk")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Desk updateDesk(@RequestBody Desk Desk) {
        return deskService.updateDesk(Desk);

    }

    @DeleteMapping("/desk/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteDesk(@PathVariable("id") String DeskId) {
        deskService.deleteDesk(DeskId);
    }


    private <T> ResponseEntity.BodyBuilder buildResponseEntity(List<T> list) {
        if (list.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT);
        } else {
            return ResponseEntity.status(HttpStatus.OK);
        }
    }

}

