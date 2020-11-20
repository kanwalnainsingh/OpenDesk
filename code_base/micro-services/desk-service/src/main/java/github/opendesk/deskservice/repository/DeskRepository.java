package github.opendesk.deskservice.repository;

import github.opendesk.deskservice.dao.DeskDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeskRepository extends CrudRepository<DeskDao, String> {
    List findByOrgId(String orgId);
    List findByOrgIdAndSiteId(String orgId, String siteId);
    List findByOrgIdAndSiteIdAndFloorId(String orgId, String siteId, String floorId);
}
