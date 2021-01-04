package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.base.BaseTest;
import github.opendesk.organisationservice.dao.SiteDao;
import github.opendesk.organisationservice.repository.SiteRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class SiteServiceImplTest extends BaseTest {
    @InjectMocks
    private SiteServiceImpl siteService;
    @Mock
    private SiteRepository siteRepository;

    @Test
    public void getSiteTest() {
        when(siteRepository.findById(anyString())).thenReturn(Optional.empty());
        assertEquals(siteService.getSite("1").getId(), null);
    }

    @Test
    public void addSiteTest() {
        when(siteRepository.save(any())).thenReturn(getSiteDao());
        assertEquals(siteService.addSite(getSite()), getSite());
    }

    @Test
    void testDeleteDesk() {
        String siteId = "1";
        siteService.deleteSite(siteId);
        siteService.deleteSite(siteId);
        verify(siteRepository, times(2)).deleteById(siteId);
    }

}
