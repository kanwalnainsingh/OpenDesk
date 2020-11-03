package github.opendesk.organisationservice.rest;

import github.opendesk.organisationservice.base.BaseTest;
import github.opendesk.organisationservice.model.Organisation;
import github.opendesk.organisationservice.service.OrganisationService;
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

import java.util.List;

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
    private static final String expectedResponse = "{\"orgId\":\"orgId\",\"companyName\":\"companyName1\",\"city\":\"city\",\"headQuarters\":\"headQuarters\",\"sites\":[{\"siteId\":\"siteId\",\"name\":\"site1\",\"floors\":[{\"floorId\":\"floorId\",\"name\":\"name\",\"totalSeat\":\"totalSeat\",\"siteId\":\"siteId\"}],\"orgId\":\"orgId\"}]}";
    private static final String expectedResponseList = "[{\"orgId\":\"orgId\",\"companyName\":\"companyName1\",\"city\":\"city\",\"headQuarters\":\"headQuarters\",\"sites\":[{\"siteId\":\"siteId\",\"name\":\"site1\",\"floors\":[{\"floorId\":\"floorId\",\"name\":\"name\",\"totalSeat\":\"totalSeat\",\"siteId\":\"siteId\"}],\"orgId\":\"orgId\"}]}]";
    private static final String expectedSiteResponse = "{\"siteId\":\"siteId\",\"name\":\"site1\",\"floors\":[{\"floorId\":\"floorId\",\"name\":\"name\",\"totalSeat\":\"totalSeat\",\"siteId\":\"siteId\"}],\"orgId\":\"orgId\"}";


    @Test
    public void getOrganisationByIdTest() throws Exception {
        when(organisationService.getOrganisationById(anyString())).thenReturn(getOrganisation());
        RequestBuilder request = MockMvcRequestBuilders.get("/organisation/1").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        String expected = "{ \"companyName\": \"companyName1\"}";
        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
    }

    @Test
    public void getOrganisationListTest() throws Exception {
        List<Organisation> organisationList = getOrganisationList();
        when(organisationService.getOrganisations()).thenReturn(organisationList);
        RequestBuilder request = MockMvcRequestBuilders.get("/organisations").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request)
                .andExpect(status().isOk())
                .andReturn();
        String expected = "[ { \"companyName\": \"companyName1\"} ]";
        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
        //TODO: Map Site in builder class
        //JSONAssert.assertEquals(expectedResponseList, result.getResponse().getContentAsString(), true);
    }

    @Test
    public void getSiteByIdTest() throws Exception {
        when(organisationService.getSiteByID(anyString())).thenReturn(getSite());
        RequestBuilder request = MockMvcRequestBuilders.get("/organisation/sites/siteId").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        String expected = "{ \"siteId\": \"siteId\"}";
        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
    }

    @Test
    public void createOrganisationTest() throws Exception {
        when(organisationService.createOrganisation(any())).thenReturn(getOrganisation());
        RequestBuilder request = MockMvcRequestBuilders.post("/organisation/create").content(expectedResponse).contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isCreated()).andReturn();
        String expected = "{ \"companyName\": \"companyName1\"}";
        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);

    }

    @Test
    public void addSiteTest() throws Exception {
        when(organisationService.getOrganisationById(anyString())).thenReturn(getOrganisation());
        when(organisationService.addSite(any())).thenReturn(getSite());
        RequestBuilder request = MockMvcRequestBuilders.put("/organisation/site/add").content(expectedSiteResponse)
                .param("orgId", "orgId").contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        String expected = "Site(siteId=siteId, name=site1, floors=null, orgId=orgId)";
        assertEquals(expected, result.getResponse().getContentAsString());
    }

}
