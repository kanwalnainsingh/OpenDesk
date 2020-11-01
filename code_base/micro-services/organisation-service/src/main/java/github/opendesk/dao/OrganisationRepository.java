package github.opendesk.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganisationRepository extends CrudRepository<OrganisationDao, String> {
}