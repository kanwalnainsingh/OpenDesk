package github.opendesk.bookingservice.repository;
import github.opendesk.bookingservice.dao.BookingDao;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<BookingDao, String> {
}