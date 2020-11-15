package github.opendesk.organisationservice.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganisationRepository extends CrudRepository<OrganisationDao, String> {
    List findBySiteId(String siteId);
    List findByOrgIdAndSitesId(String orgId, String siteId);


}