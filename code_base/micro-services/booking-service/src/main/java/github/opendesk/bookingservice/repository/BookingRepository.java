package github.opendesk.bookingservice.repository;
import github.opendesk.bookingservice.dao.BookingDao;
import org.springframework.data.annotation.QueryAnnotation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingRepository extends CrudRepository<BookingDao, String> {
    List<BookingDao> findByUserId(String userId);
}