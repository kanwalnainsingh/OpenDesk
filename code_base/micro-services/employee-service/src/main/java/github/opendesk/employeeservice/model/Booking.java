package github.opendesk.employeeservice.model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    private String bookingId;
    private String siteId;
    private String bookingDate;
    private String bookingTime;
    private String orgId;
    private String floorId;
    private String userId;
}