package github.opendesk.organisationservice.dao;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.index.Indexed;

@Data
@Builder
public class FloorDao {
    @Id
    @Indexed
    private String floorId;
    private String name;
    private String openDesk;
    private String siteId;
    private String reservedDesk;
}
