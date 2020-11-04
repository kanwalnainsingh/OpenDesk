package github.opendesk.dao;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

@Data
@Builder
@RedisHash(value = "Floor")
public class FloorDao {
    @Id
    @Indexed
    private String floorId;
    private String name;
    private String totalSeat;
    private String siteId;
}
