package github.opendesk.bookingservice.service;

import github.opendesk.bookingservice.model.Booking;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface BookingService {

    List getBookings();

    Booking getBooking(String id);

    Booking addBooking(Booking booking);

    Booking updateBooking(Booking booking);

    void deleteBooking(String id);

    List<Booking> getBookingsForAnEmployee(String empId);
}
