package github.opendesk.bookingservice.rest;

import github.opendesk.bookingservice.model.BookingModel;
import github.opendesk.bookingservice.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/bookings")
    public List getBookings() {
        List listOfBookings = bookingService.getBookings();
        return listOfBookings;
    }

    @GetMapping("/booking/{id}")
    public BookingModel getCountryById(@PathVariable String id) {
        return bookingService.getBooking(id);
    }

    @PostMapping("/booking")
    @ResponseStatus(HttpStatus.OK)
    public BookingModel addCountry(@RequestBody BookingModel bookingModel) {
        return bookingService.addBooking(bookingModel);
    }

    @PutMapping("/bookings")
    public BookingModel updateCountry(@RequestBody BookingModel bookingModel) {
        return bookingService.updateBooking(bookingModel);

    }

    @DeleteMapping("/booking/{id}")
    public void deleteCountry(@PathVariable("id") String bookingId) {
        bookingService.deleteBooking(bookingId);
    }

}
