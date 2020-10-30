package github.opendesk.bookingservice.model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingModel {
    private String bookingId;
    private String siteId;
    private String bookingDate;
    private String bookingTime;
    private String orgId;
    private String floorId;
    private String userId;
}
