package github.opendesk.organisationservice.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Floor {
    private String floorId;
    private String name;
    private String openDesk;
    private String reservedDesk;
}
