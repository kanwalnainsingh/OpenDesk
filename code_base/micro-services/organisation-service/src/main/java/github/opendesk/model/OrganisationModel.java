
package github.opendesk.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrganisationModel {
    private String orgId;
    private String companyName;
    private String city;
    private String headQuarters;
    private List<Site> sites;
}
