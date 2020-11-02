
package github.opendesk.dao;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.util.List;

@Data
@Builder
@RedisHash(value = "Site")
public class SiteDao {
    @Id
    @Indexed
    private String siteId;
    private String name;
    private List<FloorDao> floors;
    private String orgId;
}
