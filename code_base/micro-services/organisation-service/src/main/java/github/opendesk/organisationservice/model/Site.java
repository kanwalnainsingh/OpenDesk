
package github.opendesk.organisationservice.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Site {
    private String orgId;
    private String id;
    private String name;
    private String location;
    private List<Floor> floors;
}
