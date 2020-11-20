package github.opendesk.deskservice.model;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Desk {
        private String id;
        private String seatSerial;
        private String isReserved;
        private String isAvailable;
        private String orgId;
        private String siteId;
        private String floorId;
        private String status;
}
