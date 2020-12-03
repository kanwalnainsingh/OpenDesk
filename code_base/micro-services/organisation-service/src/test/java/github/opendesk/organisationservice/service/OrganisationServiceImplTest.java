package github.opendesk.organisationservice.service;

import github.opendesk.organisationservice.base.BaseTest;
import github.opendesk.organisationservice.repository.OrganisationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.env.Environment;

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
    private Environment env;

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
    public void createOrganisationTest() {
        when(organisationRepository.save(any())).thenReturn(getOrganisationDao());
        assertEquals(organisationService.createOrganisation(getOrganisation()), getOrganisation());
    }

}
