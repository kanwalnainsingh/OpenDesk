package github.opendesk.organisationservice.rest;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import github.opendesk.organisationservice.base.BaseTest;
import github.opendesk.organisationservice.service.OrganisationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.io.File;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(OrganisationController.class)
public class OrganisationControllerTest extends BaseTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private OrganisationService organisationService;
    private DocumentContext organisationContext;
    private DocumentContext organisationListContext;
    private DocumentContext siteContext;


    @BeforeEach
    public void setup() throws IOException {
        File organisationFile = new File("src/test/resources/organisationSample.json");
        organisationContext = JsonPath.parse(organisationFile);
        File organisationListFile = new File("src/test/resources/organisationListSample.json");
        organisationListContext = JsonPath.parse(organisationListFile);
        File siteFile = new File("src/test/resources/siteSample.json");
        siteContext = JsonPath.parse(siteFile);
    }

    @Test
    public void getOrganisationByIdTest() throws Exception {
        when(organisationService.getOrganisationById(anyString())).thenReturn(getOrganisation());
        RequestBuilder request = MockMvcRequestBuilders.get("/organisation/{id}", "orgId").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        JSONAssert.assertEquals(organisationContext.jsonString(), result.getResponse().getContentAsString(), true);
    }

    @Test
    public void getOrganisationListTest() throws Exception {
        when(organisationService.getOrganisations()).thenReturn(getOrganisationList());
        RequestBuilder request = MockMvcRequestBuilders.get("/organisations").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();
        JSONAssert.assertEquals(organisationListContext.jsonString(), result.getResponse().getContentAsString(), true);
    }

    @Test
    public void getSiteByIdTest() throws Exception {
        when(organisationService.getSiteByID(anyString())).thenReturn(getSite());
        RequestBuilder request = MockMvcRequestBuilders.get("/organisation/sites/{id}", "siteId").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        JSONAssert.assertEquals(siteContext.jsonString(), result.getResponse().getContentAsString(), true);
    }

    @Test
    public void createOrganisationTest() throws Exception {
        when(organisationService.createOrganisation(any())).thenReturn(getOrganisation());
        RequestBuilder request = MockMvcRequestBuilders.post("/organisation").content(organisationContext.jsonString()).contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isCreated()).andReturn();
        JSONAssert.assertEquals(organisationContext.jsonString(), result.getResponse().getContentAsString(), true);

    }

    @Test
    public void addSiteTest() throws Exception {
        when(organisationService.getOrganisationById(anyString())).thenReturn(getOrganisation());
        when(organisationService.addSite(any())).thenReturn(getSite());
        RequestBuilder request = MockMvcRequestBuilders.post("/organisation/{id}/site", "orgId").content(siteContext.jsonString())
                .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        String expected = "Site(siteId=siteId, name=site1, floors=[Floor(floorId=floorId, name=floor1, totalSeat=totalSeat, siteId=siteId)], orgId=orgId)";
        assertEquals(expected, result.getResponse().getContentAsString());
    }

}
