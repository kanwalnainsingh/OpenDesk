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

    @GetMapping("/api/booking-service/bookings")
    public List getBookings() {
        List listOfBookings = bookingService.getBookings();
        return listOfBookings;
    }

    @GetMapping("/api/booking-service/booking/{id}")
    public Booking getCountryById(@PathVariable String id) {
        return bookingService.getBooking(id);
    }

    @PostMapping("/api/booking-service/booking")
    @ResponseStatus(HttpStatus.OK)
    public Booking addCountry(@RequestBody Booking booking) {
        return bookingService.addBooking(booking);
    }

    @PutMapping("/api/booking-service/bookings")
    public Booking updateCountry(@RequestBody Booking booking) {
        return bookingService.updateBooking(booking);

    }

    @DeleteMapping("/api/booking-service/booking/{id}")
    public void deleteCountry(@PathVariable("id") String bookingId) {
        bookingService.deleteBooking(bookingId);
    }

}
