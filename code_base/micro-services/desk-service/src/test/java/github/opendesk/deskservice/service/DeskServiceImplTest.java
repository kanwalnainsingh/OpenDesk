package github.opendesk.deskservice.service;

import github.opendesk.deskservice.base.BaseTest;
import github.opendesk.deskservice.repository.DeskRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class DeskServiceImplTest extends BaseTest {

    @InjectMocks
    private DeskServiceImpl deskService;
    @Mock
    private DeskRepository deskRepository;

    @Test
    public void getDesksByOragIdTest() {
        when(deskRepository.findByOrgId(anyString())).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesksByOrgId("orgId"), getDeskList());
    }

    @Test
    public void getDesksByOragIdAndSiteIdTest() {
        when(deskRepository.findByOrgIdAndSiteId(anyString(), anyString())).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesksByOrgIdAndSiteId("orgId", "siteId"), getDeskList());
    }

    @Test
    public void getDesksByOragIdSiteIdAndFloorIdTest() {
        when(deskRepository.findByOrgIdAndSiteIdAndFloorId(anyString(), anyString(), anyString())).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesksByOrgIdSiteIdAndFloorId("orgId", "siteId", "floorId"), getDeskList());
    }
}

