package github.opendesk.bookingservice.service;

import github.opendesk.bookingservice.model.BookingModel;

import java.util.List;

public interface BookingService {

    public List getBookings();

    public BookingModel getBooking(String id);

    public BookingModel addBooking(BookingModel bookingModel);

    public BookingModel updateBooking(BookingModel bookingModel);

    public void deleteBooking(String id);
}
