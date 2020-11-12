package github.opendesk.deskservice.dao;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.redis.core.RedisHash;

@Data
@Builder
@RedisHash(value = "booking")
public class DeskDao {
    private String id;
    private String seatSerial;
    private String isReserved;
    private String isAvailable;
    private String floorId;
    private String siteId;
    private String orgId;
    private String status;
}
