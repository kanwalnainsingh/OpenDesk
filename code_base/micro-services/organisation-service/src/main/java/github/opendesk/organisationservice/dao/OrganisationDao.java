package github.opendesk.organisationservice.dao;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.util.List;

@Data
@Builder
@RedisHash(value = "Organisation")
public class OrganisationDao {
    @Id
    @Indexed
    private String orgId;
    private String companyName;
    private String city;
    private String headQuarters;
    private List<SiteDao> sites;
}
