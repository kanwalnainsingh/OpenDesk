package github.opendesk.deskservice.model;

public class Booking {
    private String bookingId;
    private String siteId;
    private String bookingDate;
    private String bookingTime;
    private String orgId;
    private String floorId;
    private String userId;
    private String deskId;

    public String getSiteId() {
        return siteId;
    }

    public String getBookingDate() {
        return bookingDate;
    }

    public String getOrgId() {
        return orgId;
    }

    public String getFloorId() {
        return floorId;
    }

    public String getDeskId() {
        return deskId;
    }

    @Override
    public boolean equals(Object obj) {
        return (obj instanceof Booking)
                && ((Booking) obj).getBookingDate().equals(this.bookingDate)
                && ((Booking) obj).getFloorId().equals(this.floorId)
                && ((Booking) obj).getOrgId().equals(this.orgId)
                && ((Booking) obj).getSiteId().equals(this.siteId);
    }
}
