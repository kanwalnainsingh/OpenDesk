package github.opendesk.organisationservice.converter;

import github.opendesk.organisationservice.base.BaseTest;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static github.opendesk.organisationservice.converter.OrganisationConverter.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class OrganisationConverterTest extends BaseTest {

    @Test
    public void organisationModelToOrganisationDaoTest() {
        assertEquals(organisationModelToOrganisationDao.apply(getOrganisation()), getOrganisationDao());
    }

    @Test
    public void organisationDaoToOrganisationModelTest() {
        assertEquals(organisationDaoToOrganisationModel.apply(getOrganisationDao()), getOrganisation());
    }

    @Test
    public void siteModelToSiteDaoTest() {
        assertEquals(siteModelToSiteDao.apply(getSite()), getSiteDao());
    }

    @Test
    public void siteDaoToSiteModelTest() {
        assertEquals(siteDaoToSiteModel.apply(getSiteDao()), getSite());
    }
}
