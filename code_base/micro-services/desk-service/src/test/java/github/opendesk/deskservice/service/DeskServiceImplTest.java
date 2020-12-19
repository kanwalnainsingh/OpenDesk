package github.opendesk.deskservice.service;

import github.opendesk.deskservice.base.BaseTest;
import github.opendesk.deskservice.model.Desk;
import github.opendesk.deskservice.repository.DeskRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class DeskServiceImplTest extends BaseTest {

    @InjectMocks
    private DeskServiceImpl deskService;
    @Mock
    private DeskRepository deskRepository;

    @Test
    public void getDesksByOrgIdTest() {
        when(deskRepository.findByOrgId(anyString())).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesksByOrgId("orgId"), getDeskList());
    }

    @Test
    public void getDesksByOrgIdAndSiteIdTest() {
        when(deskRepository.findByOrgIdAndSiteId(anyString(), anyString())).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesksByOrgIdAndSiteId("orgId", "siteId"), getDeskList());
    }

    @Test
    public void getDesksByOrgIdSiteIdAndFloorIdTest() {
        when(deskRepository.findByOrgIdAndSiteIdAndFloorId(anyString(), anyString(), anyString())).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesksByOrgIdSiteIdAndFloorId("orgId", "siteId", "floorId"), getDeskList());
    }

    @Test
    public void testGetDesk() {
        when(deskRepository.findById("1")).thenReturn(Optional.of(getDeskDao()));
        assertEquals(deskService.getDesk("1"), getDesk());
        when(deskRepository.findById("1")).thenReturn(Optional.empty());
        assertEquals(deskService.getDesk("1").getId(), null);
    }

    @Test
    public void testGetDesks() {
        when(deskRepository.findAll()).thenReturn(getDeskDaoList());
        assertEquals(deskService.getDesks(), getDeskList());
    }

    @Test
    public void testAddOrUpdateDesks() {
        when(deskRepository.save(getDeskDao())).thenReturn(getDeskDao());
        assertEquals(deskService.addDesk(getDesk()), getDesk());
    }

    @Test
    void testDeleteDesk() {
        String deskId = "1";
        deskService.deleteDesk(deskId);
        deskService.deleteDesk(deskId);
        verify(deskRepository, times(2)).deleteById(deskId);
    }

    @Test
    void testPersistDesk() {
        when(deskRepository.saveAll(Arrays.asList(getMockOpenDeskDaoForPersist()))).thenReturn(Arrays.asList(getMockOpenDeskDaoForPersist()));
        when(deskRepository.saveAll(Arrays.asList(getMockReservedDeskDaoForPersist()))).thenReturn(Arrays.asList(getMockReservedDeskDaoForPersist()));
        List<Desk> deskList = Arrays.asList(getMockOpenDeskForPersist(),
                getMockReservedDeskForPersist());
        assertEquals(deskService.persistDesks(getMockOrganisation()), deskList);
    }

}

