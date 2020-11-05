package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.base.BaseTest;
import github.opendesk.organisationservice.dao.OrganisationRepository;
import github.opendesk.organisationservice.dao.SiteRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class OrganisationServiceImplTest extends BaseTest {
    @InjectMocks
    private OrganisationServiceImpl organisationService;
    @Mock
    private OrganisationRepository organisationRepository;
    @Mock
    private SiteRepository siteRepository;

    @Test
    public void getOrganisationsTest() {
        when(organisationRepository.findAll()).thenReturn(getOrganisationDaoList());
        assertEquals(organisationService.getOrganisations(), getOrganisationList());
    }

    @Test
    public void getOrganisationByIdTest() {
        when(organisationRepository.findById(anyString())).thenReturn(Optional.of(getOrganisationDao()));
        assertEquals(organisationService.getOrganisationById("1"), getOrganisation());

    }

    @Test
    public void getSiteByIDTest() {
        when(siteRepository.findById(anyString())).thenReturn(Optional.of(getSiteDao()));
        assertEquals(organisationService.getSiteByID("1"), getSite());
    }

    @Test
    public void createOrganisationTest() {
        when(organisationRepository.save(any())).thenReturn(getOrganisationDao());
        assertEquals(organisationService.createOrganisation(getOrganisation()), getOrganisation());
    }

    @Test
    public void addSiteTest() {
        when(siteRepository.save(any())).thenReturn(getSiteDao());
        assertEquals(organisationService.addSite(getSite()), getSite());
    }
}
