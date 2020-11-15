package github.opendesk.deskservice.repository;

import github.opendesk.deskservice.dao.DeskDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeskRepository extends CrudRepository<DeskDao, String> {
}