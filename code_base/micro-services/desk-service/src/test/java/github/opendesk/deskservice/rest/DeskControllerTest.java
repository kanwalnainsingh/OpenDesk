package github.opendesk.deskservice.rest;

import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import github.opendesk.deskservice.base.BaseTest;
import github.opendesk.deskservice.service.DeskService;
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

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(DeskController.class)
public class DeskControllerTest extends BaseTest{
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private DeskService deskService;
    private DocumentContext deskContext;


    @BeforeEach
    public void setup() throws IOException {
        File deskFile = new File("src/test/resources/deskSample.json");
        deskContext = JsonPath.parse(deskFile);
    }

    @Test
    public void getDesksByOragIdTest() throws Exception {
        when(deskService.getDesksByOrgId(anyString())).thenReturn(getDeskList());
        RequestBuilder request = MockMvcRequestBuilders.get("/desks/{orgId}", "orgId").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        JSONAssert.assertEquals(deskContext.jsonString(), result.getResponse().getContentAsString(), true);
    }

    @Test
    public void getDesksByOragIdAndSiteIdTest() throws Exception {
        when(deskService.getDesksByOrgIdAndSiteId(anyString(),anyString())).thenReturn(getDeskList());
        RequestBuilder request = MockMvcRequestBuilders.get("/desks/{orgId}/{siteId}", "orgId", "siteId").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        JSONAssert.assertEquals(deskContext.jsonString(), result.getResponse().getContentAsString(), true);
    }

    @Test
    public void getDesksByOragIdSiteIdAndFloorId() throws Exception {
        when(deskService.getDesksByOrgIdSiteIdAndFloorId(anyString(), anyString(), anyString())).thenReturn(getDeskList());
        RequestBuilder request = MockMvcRequestBuilders.get("/desks/{orgId}/{siteId}/{floorId}", "orgId", "siteId", "floorId").accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(request).andExpect(status().isOk()).andReturn();
        JSONAssert.assertEquals(deskContext.jsonString(), result.getResponse().getContentAsString(), true);
    }
}
