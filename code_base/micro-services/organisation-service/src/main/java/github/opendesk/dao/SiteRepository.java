package github.opendesk.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SiteRepository extends CrudRepository<SiteDao, String> {
}