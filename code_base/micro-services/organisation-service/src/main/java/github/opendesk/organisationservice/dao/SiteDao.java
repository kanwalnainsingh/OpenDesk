
package github.opendesk.organisationservice.dao;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.util.List;

@Data
@Builder
@RedisHash(value = "Sites")
public class SiteDao {
    @Id
    @Indexed
    private String id;
    private String orgId;
    private String name;
    private String location;
    private List<FloorDao> floors;
}
