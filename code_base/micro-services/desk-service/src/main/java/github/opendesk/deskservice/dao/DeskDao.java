package github.opendesk.deskservice.dao;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

@Data
@Builder
@RedisHash(value = "booking")
public class DeskDao {
    @Id
    @Indexed
    private String id;
    private String seatSerial;
    private String isReserved;
    private String isAvailable;
    @Indexed
    private String orgId;
    @Indexed
    private String siteId;
    @Indexed
    private String floorId;
    private String status;
}
