package github.opendesk.deskservice.repository;

import github.opendesk.deskservice.dao.DeskDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeskRepository extends CrudRepository<DeskDao, String> {
    List<DeskDao> findByOrgId(String orgId);
    List<DeskDao> findByOrgIdAndSiteId(String orgId, String siteId);
    List<DeskDao> findByOrgIdAndSiteIdAndFloorId(String orgId, String siteId, String floorId);
}
