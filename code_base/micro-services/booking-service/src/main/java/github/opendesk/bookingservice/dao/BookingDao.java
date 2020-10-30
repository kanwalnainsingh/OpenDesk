package github.opendesk.bookingservice.dao;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

@Data
@Builder
@RedisHash(value = "booking")
public class BookingDao {
    @Id
    @Indexed
    private String bookingId;
    private String siteId;
    private String bookingDate;
    private String bookingTime;
    private String orgId;
    private String floorId;
    private String userId;
}
