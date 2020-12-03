package github.opendesk.organisationservice.repository;

import github.opendesk.organisationservice.dao.SiteDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SiteRepository extends CrudRepository<SiteDao, String> {
}
