package github.opendesk.bookingservice.rest;

import github.opendesk.bookingservice.model.Booking;
import github.opendesk.bookingservice.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/bookings")
    public List getBookings() {
        List listOfBookings = bookingService.getBookings();
        return listOfBookings;
    }

    @GetMapping("/bookings/employee/{empId}")
    public List getBookingsForAnEmployee(@PathVariable(name = "empId") String empId) {
        return bookingService.getBookingsForAnEmployee(empId);
    }

    @GetMapping("/booking/{id}")
    public Booking getBookingById(@PathVariable String id) {
        return bookingService.getBooking(id);
    }

    @PostMapping("/booking")
    @ResponseStatus(HttpStatus.OK)
    public Booking addBooking(@RequestBody Booking booking) {
        return bookingService.addBooking(booking);
    }

    @PutMapping("/bookings")
    public Booking updateBookings(@RequestBody Booking booking) {
        return bookingService.updateBooking(booking);
    }

    @DeleteMapping("/booking/{id}")
    public void deleteBooking(@PathVariable("id") String bookingId) {
        bookingService.deleteBooking(bookingId);
    }

}
