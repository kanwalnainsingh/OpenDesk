package github.opendesk.bookingservice.service;

import github.opendesk.bookingservice.model.Booking;

import java.util.List;

public interface BookingService {

    public List getBookings();

    public Booking getBooking(String id);

    public Booking addBooking(Booking booking);

    public Booking updateBooking(Booking booking);

    public void deleteBooking(String id);
}
